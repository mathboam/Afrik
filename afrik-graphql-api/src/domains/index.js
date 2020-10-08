const { gql } = require("apollo-server");

module.exports = gql`
  type Product {
    createdAt: Date
    updatedAt: Date
    numberInStock: Int
    colors: [String]
    sizes: [Int]
    price: Int
  }
  type Payment {
    amount: Int
    mode: String
    timePaid: Date
  }
  type Order {
    products: [Product]
    payment: Payment
  }
`;
