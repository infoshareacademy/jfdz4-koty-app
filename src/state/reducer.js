import productsSearching from './parts/productsSearching'

export default (state = {}, action) => {
    return {
        productsSearching: productsSearching(state.productsSearching, action),
    }
}