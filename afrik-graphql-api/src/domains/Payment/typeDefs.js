const {
  gql
} = require("apollo-server-express");

module.exports = gql `
enum Mode {
  MobileMoney
  Bank
  Spektra
}
  type Payment {
    _id: ID
    amount: Int
    mode: Mode
    paid: Boolean
    createAt:Date
    updatedAt:Date
  }
  input GetPayemntFilter {
    paymentId: ID!
  }
  input DeletePaymentInput {
    paymentId: ID!
  }
  input GetPayemntsFilter {
    amount: Int
    mode: Mode
    paid: Boolean
    createAt: Date
    updatedAt: Date
  }
  input CreatePaymentInput {
    amount: Int
    mode: Mode
    paid: Boolean
  }
  input UpdatePayemntInput {
    paymentId: ID!
    amount: Int
    mode: Mode
    paid: Boolean
  }
  extend type Query {
    Payments(filter: GetPayemntsFilter={} ,pagination: Pagination): [Payment]
    Payment(filter: GetPayemntFilter={}): Payment
  }
  extend type Mutation {
    CreatePayment(input: CreatePaymentInput): Payment
    UpdatePayment(input: UpdatePayemntInput): Payment
    DeletePayment(input: DeletePaymentInput):Payment
  }
`;
