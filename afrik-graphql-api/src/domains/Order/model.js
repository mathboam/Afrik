const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    products: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Product',
        required: true,
    }],
    payment: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Payment',
        required: true,
    },
    state: {
        type: String,
        required: true
    },
    collectionMode: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = {
    OrderModel
};