const {
    ProductModel
} = require("./model")

module.exports = {
    getProducts: async ({
        filter = {},
        order = "ascending",
        orderBy = "createdAt"
    }) => {
        try {
            const productDocs = await ProductModel
                .find(filter)
                .sort({
                    [orderBy]: order
                })
            return productDocs;
        } catch (error) {
            return error;
        }
    },
    getProduct: async ({
        filter: {
            productId
        }
    }) => {
        try {
            console.log(productId)
            const productDoc = ProductModel.findById(productId);
            return productDoc;
        } catch (error) {
            return error;
        }
    },
    createProduct: async ({
        input
    }) => {
        try {
            const _product = new ProductModel({
                ...input
            })
            await _product.save();
            return _product;
        } catch (error) {
            return error
        }
    },
    updateProduct: async ({
        input: {
            productId,
            ...updates
        }
    }) => {
        try {
            const _updatedProduct = ProductModel.findByIdAndUpdate(productId, {
                ...updates
            }, {
                new: true
            })
            return _updatedProduct;
        } catch (error) {
            return error
        }
    },
    deleteProduct: async ({
        input: {
            productId
        }
    }) => {
        try {
            const _deletedProduct = await ProductModel.findByIdAndRemove(productId);
            return _deletedProduct;
        } catch (error) {
            return error;
        }
    }

}