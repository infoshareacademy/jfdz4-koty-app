import productsSearching from './parts/productsSearching'
import products from './parts/products'


export default (state = {}, action) => {
    return {
        productsSearching: productsSearching(state.productsSearching, action),
        products: products(state.products, action)
    }
}