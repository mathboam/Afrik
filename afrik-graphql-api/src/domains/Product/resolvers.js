const {
    getProducts,
    getProduct,
    createProduct,
    updateProduct
} = require("./actions")

module.exports = {
    // product query resolvers
    Query: {
        // get all products
        Products: async (_, args) => {
            try {
                const result = await getProducts(args)
                return result
            } catch (error) {
                return error
            }
        },
        // get a single product
        Product: async (_, args) => {
            try {
                const result = await getProduct(args);
                return result;
            } catch (error) {
                return error
            }
        }
    },
    // product mutation resolvers
    Mutation: {
        // create new Product
        CreateProduct: async (_, args) => {
            try {
                const result = await createProduct(args)
                return result;
            } catch (error) {
                return error
            }
        },
        //  update product
        UpdateProduct: async (_, args) => {
            try {
                const results = await updateProduct(args);
                return results;
            } catch (error) {
                return error
            }
        },
        DeleteProduct: async (_, args) => {
            try {
                const results = await deleteProduct(args)
            } catch (error) {
                return error;
            }
        }
    }
}