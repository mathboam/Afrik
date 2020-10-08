const mongoose = require("mongoose");
const {
  stripIgnoredCharacters
} = require("graphql");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  numberInStock: {
    type: Number,
  },
  color: [{
    type: String,
    enum: ["Black",
      "Brown",
      "Cofee",
      "DarkBrown"
    ],
    required: true
  }],
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
  }
}, {
  timestamps: true
});

const ProductModel = mongoose.model("Product", ProductSchema);

module.exports = {
  ProductModel,
};