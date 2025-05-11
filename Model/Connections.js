const mongoose = require('mongoose');
const { Schema } = mongoose;
const packageSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      enum: ['Basic Package', 'Standard Package', 'Popular Package'],
    },
    connections: {
      type: Number, // Store as number instead of string like "5 connections"
      required: true,
    },
    price: {
      type: Number, // Store numeric value like 200, 800
      required: true,
    },
    discount: {
      type: Number, // Store numeric discount value like 100, 400
      required: true,
    },
    currency: {
      type: String,
      enum: ['BDT', 'USD', 'EUR', 'INR', 'GBP'],
      default: 'USD',
    },
    description: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    }
  }, { timestamps: true });
const Connection = mongoose.model('Connections', packageSchema);
module.exports = Connection;