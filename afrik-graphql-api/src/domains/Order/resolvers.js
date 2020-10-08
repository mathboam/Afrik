const {
    getOrder,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
} = require("./actions");

// actions to perform functions
module.exports = {
    Query: {
        Order: async function (_, args) {
            try {
                const result = getOrder(args);
                return result;
            } catch (err) {
                return err;
            }
        },
        Orders: async function (_, args) {
            try {
                const results = getOrders(args);
                return results;
            } catch (err) {
                return err;
            }
        },
    },
    Mutation: {
        CreateOrder: async (_, args) => {
            try {
                const results = await createOrder(args)
                return results
            } catch (error) {
                return error
            }
        },
        DeleteOrder: async function (_, args) {
            try {
                const result = await deleteOrder(args);
                return result;
            } catch (err) {
                return err;
            }
        },
        UpdateOrder: async function (_, args) {
            try {
                const result = await updateOrder(args)
                return result;
            } catch (err) {
                return err;
            }
        },
    }
};