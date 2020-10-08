const {
    OrderModel
} = require("./model");


async function getOrder({
    orderId
}) {
    const doc = await OrderModel
        .findOne({
            _id: orderId
        })
        .populate('products')
        .populate('payment');
    return doc;
}
async function getOrders({
    filter = {},
    order = "ascending",
    orderBy = "createdAt"
}) {
    const docs = await OrderModel
        .find(filter)
        .sort({
            [orderBy]: order
        })
        .populate('products')
        .populate('payment');
    return docs;
}
async function createOrder({
    input
}) {
    try {
        const newOrder = new OrderModel({
            ...input
        });
        await newOrder.save();
        return newOrder;
    } catch (error) {
        return error
    }
}

module.exports = {
    getOrder,
    getOrders,
    createOrder,
    deleteOrder: async ({
        input: {
            orderId
        }
    }) => {
        try {
            const _deletedOrder = await OrderModel.findByIdAndRemove(orderId);
            return _deletedOrder;
        } catch (error) {
            return error;
        }
    },
    updateOrder: async ({
        input: {
            orderId,
            ...updates
        }
    }) => {
        try {
            const _updatedOrder = await OrderModel.findByIdAndUpdate(orderId, {
                ...updates
            }, {
                new: true
            })
            return _updatedOrder;
        } catch (error) {
            return error;
        }

    }
};