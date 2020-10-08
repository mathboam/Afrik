const {
  gql
} = require("apollo-server-express");

module.exports = gql `
enum State {
  Processing
  Done
}
enum CollectionMode {
  PickUp
  Delivery
}
  type Order {
    _id: ID
    products: [Product]
    payment: Payment
    state: State
    collectionMode: CollectionMode
    createdAt: Date
    updatedAt: Date
  }
  input GetOrderFilter {
    orderId: ID
  }
  input GetOrdersFilter {
    products: [ID]
    payment: ID
    state: State
    collectionMode: CollectionMode
  }
  input CreateOrderInput {
    products: [ID]
    payment: ID
    state: State
    collectionMode: CollectionMode
  }
  input UpdateOrderInput {
    orderId: ID!
    products: [ID]
    payment: ID
    state: State
    collectionMode: CollectionMode
  }
  input DeleteOrderInput {
    orderId: ID!
  }
  extend type Query {
    Order(filter:GetOrderFilter={}): Order
    Orders(filter: GetOrdersFilter,pagination: Pagination): [Order]
  }
  extend type Mutation {
    CreateOrder(input: CreateOrderInput): Order
    UpdateOrder(input: UpdateOrderInput): Order
    DeleteOrder(input: DeleteOrderInput): Order
  }
`;