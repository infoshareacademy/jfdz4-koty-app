import productsSearching from './parts/productsSearching'
import products from './parts/products'
import favoriteItem from './parts/favoriteProduct'


export default (state = {}, action) => {
    return {
        productsSearching: productsSearching(state.productsSearching, action),
        products: products(state.products, action),
        favoriteItem: favoriteItem(state.favoriteItem,  action)

    }
}