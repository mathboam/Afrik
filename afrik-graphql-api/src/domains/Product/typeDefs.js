const {
  gql
} = require("apollo-server-express");

module.exports = gql `
enum Colors {
  Black
  Brown
  Cofee 
  DarkBrown
}
enum DocOrder{
  ascending
  descending
}
  type Product {
    _id: ID
    name: String
    image: String
    numberInStock: Int
    color: [Colors]
    price: Int
    description: String
    createdAt : Date
    updatedAt : Date
  }
  input CreateProductInput {
    name: String
    image: String
    numberInStock: Int
    color: [Colors]
    price: Int
    description: String
  }
  input UpdateProductInput {
    productId: ID!
    name: String
    image: String
    numberInStock: Int
    color: [Colors]
    price: Int
    description: String
  }
  input DeleteProductInput {
    productId: ID!
  }
  input GetProductFilter{
    productId: ID!
  }
  input GetProductsFilter{
    name: String
    image: String
    numberInStock: Int
    color: [Colors]
    price: Int
    description: String
    search: String
    order: DocOrder
    createdAt : Date
    updatedAt : Date
  }
  extend type Query {
    Product(filter: GetProductFilter={}): Product
    Products(filter: GetProductsFilter={} pagination: Pagination): [Product]
  }
  extend type Mutation {
    CreateProduct(input: CreateProductInput): Product
    UpdateProduct(input: UpdateProductInput): Product
    DeleteProduct(input: DeleteProductInput): Product
  }
`;