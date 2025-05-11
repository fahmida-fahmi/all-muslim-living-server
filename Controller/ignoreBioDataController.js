const IgnoreBioDatas = require("../Model/IgnoreBioDataModel");

exports.addIgnoreList = async (req, res) => {
  const list = req.body;
  console.log(list);
  const result = await IgnoreBioDatas.insertMany(list);
  res.send(result);
};

exports.deleteIgnoreList = async (req, res) => {
  const { id } = req.params;
  const result = await IgnoreBioDatas.deleteOne({ _id: id });
  res.send(result);
};

exports.getAllIgnoreList = async (req, res) => {
  try {
    const email = req.query.email;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const ignoreLists = await IgnoreBioDatas.find({ email: email });
    res.send(ignoreLists);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
};

exports.getSingleIgnoreList = async (req, res) => {
  try {
    const singleIgnoreList = await IgnoreBioDatas.findById(req.params.id);
    if (!singleIgnoreList)
      return res.status(404).json({ message: "Biodata not found" });
    res.status(200).json(singleIgnoreList);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch biodata", error: error.message });
  }
};
