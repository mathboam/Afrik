const {
  getPayment,
  getPayments,
  createPayment,
  updatePayment,
  deletePayment
} = require("./actions");

// actions to perform functions
module.exports = {
  Query: {
    Payment: function (_, args) {
      try {
        const result = getPayment(args);
        return result;
      } catch (err) {
        return err;
      }
    },
    Payments: function (_, args) {
      try {
        const results = getPayments(args);
        return results;
      } catch (err) {
        return err;
      }
    },
  },
  Mutation: {
    CreatePayment: async (_, args) => {
      try {
        const results = await createPayment(args)
        return results
      } catch (error) {
        return error
      }
    },
    DeletePayment: async function (_, args) {
      try {
        const result = await deletePayment(args);
        return result;
      } catch (err) {
        return err;
      }
    },
    UpdatePayment: async function (_, args) {
      try {
        const result = await updatePayment(args)
        return result;
      } catch (err) {
        return err;
      }
    },
  }
};