const initialState = {
    searchPhrase: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'productsSearching/SET_SEARCH_PHRASE':
            return {
                ...state,
                searchPhrase: action.searchPhrase
            }
        default:
            return state
    }
}