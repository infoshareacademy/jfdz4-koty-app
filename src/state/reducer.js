import products from './parts/products'

export default (state = {}, action) => {
    return {
        products: products(state.products, action),
    }
}