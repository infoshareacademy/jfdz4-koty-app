import productsSearching from './parts/productsSearching'
import products from './parts/products'
import favorite from './parts/favoriteProduct'


export default (state = {}, action) => {
    return {
        productsSearching: productsSearching(state.productsSearching, action),
        products: products(state.products, action),
        favorite: favorite(state.favorite,  action)

    }
}