const {
  PaymentModel
} = require("./model");


async function getPayment({
  paymentId
}) {
  const doc = await PaymentModel.find({
    _id: paymentId
  });
  return doc;
}
async function getPayments({
  filter = {},
  order = "ascending",
  orderBy = "createdAt"
}) {
  const docs = await PaymentModel
    .find(filter)
    .sort({
      [orderBy]: order
    });
  return docs;
}
async function createPayment({
  input
}) {
  try {
    const newPayment = new PaymentModel({
      ...input
    });
    await newPayment.save();
    return newPayment;
  } catch (error) {
    return error
  }
}

module.exports = {
  getPayment,
  getPayments,
  createPayment,
  deletePayment: async ({
    input: {
      paymentId
    }
  }) => {
    try {
      const _deletedPayment = await PaymentModel.findByIdAndRemove(paymentId);
      return _deletedPayment;
    } catch (error) {
      return error;
    }
  },
  updatePayment: async ({
    input: {
      paymentId,
      ...updates
    }
  }) => {
    try {
      const _updatedPayment = await PaymentModel.findByIdAndUpdate(paymentId, {
        ...updates
      }, {
        new: true
      })
      return _updatedPayment;
    } catch (error) {
      return error
    }
  }
};