const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  mode: {
    type: String,
    enum: ["MobileMoney", "Spektra", "Bank"],
    required: true,
  },
  paid: {
    type: Boolean,
  },
}, {
  timestamps: true
});

const PaymentModel = mongoose.model("Payment", PaymentSchema);
module.exports = {
  PaymentModel,
};