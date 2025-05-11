const mongoose = require("mongoose");

const sslCommerzSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      enum: ["Basic Package", "Standard Package", "Popular Package"],
    },
    connection: {
      type: Number, // Store as number instead of string like "5 connections"
      required: true,
    },
    price: {
      type: Number, // Store numeric value like 200, 800
      required: true,
    },
    discount: {
      type: Number, // Store numeric discount value like 100, 400
      // required: true,
    },
    description: {
      type: String,
      // required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    trans_id: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
const SSLCommerz = mongoose.model("SSLCommerz", sslCommerzSchema);
module.exports = SSLCommerz;
