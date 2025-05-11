const SSLCommerzPayment = require("sslcommerz-lts");
const SSLCommerz = require("../Model/SSLCommerz");

const { v4: uuidv4 } = require("uuid");

const trans_id = uuidv4();

exports.createSSL = async (req, res) => {
  const store_id = process.env.STORE_ID;
  const store_passwd = process.env.STORE_PASSWORD;
  const is_live = false; //true for live, false for sandbox
  try {
    const package = req.body;

    // Validate required fields
    if (!package?.price || !package?.email) {
      return res.status(400).json({ error: "Price and email are required!" });
    }

    // Generate transaction ID

    // SSLCommerz payment data
    const paymentData = {
      total_amount: package.price,
      currency: package.currency || "BDT",
      tran_id: trans_id,
      success_url: `http://localhost:8000/payment/success/${trans_id}`,
      // success_url: "http://localhost:3030/success",
      fail_url: `http://localhost:8000/payment/failed/${trans_id}`,
      cancel_url: "http://localhost:3030/cancel",
      ipn_url: "http://localhost:3030/ipn",
      cus_name: package.name || "Customer",
      cus_email: package.email,
      cus_phone: "01711111111", // Required by SSLCommerz
      cus_city: "Dhaka",
      cus_country: "Bangladesh",
      shipping_method: "NO", // "NO" for digital goods
      product_name: "Connections Package",
      product_category: "Digital Services",
      product_profile: "general",
    };
    const result = await SSLCommerz.create({
      ...package,
      trans_id,
      status: "PENDING",
    });
    const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live);
    const apiResponse = await sslcz.init(paymentData);

    if (!apiResponse?.GatewayPageURL) {
      throw new Error("SSLCommerz did not return a valid payment URL.");
    }

    return res.json({
      success: true,
      url: apiResponse.GatewayPageURL,
      result,
      message: "Payment URL generated successfully.",
    });

  } catch (error) {
    console.error("❌ SSLCommerz Error:", error.message);
    return res.status(500).json({
      success: false,
      error: error.message || "Payment failed. Please try again.",
    });
  }
};

exports.addPayment = async (req, res) => {
  const tranId = req.params.trans_id;
  console.log("Received payment data:", tranId);

  try {
    const result = await SSLCommerz.updateOne(
      { trans_id: tranId },
      {
        $set: {
          paidStatus: true,
        },
      }
    );

    console.log("Updated payment result:", result);

    if (result.modifiedCount > 0) {
      return res.redirect(`http://localhost:5173/success/${tranId}`);
    } else {
      return res.status(404).json({ message: "Transaction not found or already updated." });
    }
  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

exports.failedPayment = async (req, res) => {
  const trans_id = req.params.trans_id;
  console.log("Didn't Received payment data:", trans_id);

  try {
    const result = await SSLCommerz.deleteOne(
      { trans_id: trans_id },      
);

    console.log("Updated payment result:", result);

    if (result.deletedCount) {
      return res.redirect(`http://localhost:5173/failed/${trans_id}`);
    } else {
      return res.status(404).json({ message: "Transaction not found or already updated." });
    }
  } catch (error) {
    console.error("Update error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
