const {
  ApolloServer,
  gql
} = require("apollo-server-express");

// Schemas and their resolvers
const product = require("./domains/Product")
const payment = require("./domains/Payment")
const order = require("./domains/Order")

let root = "afrik";

const rootTypeDef = gql `
  scalar Date

  input Pagination {
    skip: Int
    limit: Int
  }

  type Query {
    root: String
  }

  type Mutation {
    root(root: String): String
  }
`;

const rootResolver = {
  Query: {
    root: function () {
      return root
    }
  },
  Mutation: {
    root: function (_, args) {
      root = args;
      return root
    }
  }
}

//configuring gql server

function GraphQlServer() {
  return new ApolloServer({
    typeDefs: [rootTypeDef,
      order.typeDefs,
      product.typeDefs,
      payment.typeDefs,
    ],
    resolvers: [rootResolver,
      order.resolvers,
      product.resolvers,
      payment.resolvers,

    ],
    introspection: true,
    playground: true,
    tracing: true,
  });
}

module.exports = GraphQlServer;