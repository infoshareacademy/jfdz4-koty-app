const initialState = {
    addFavorite: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'products/ADD_FAVORITE':
            return {
                ...state,
                addFavorite: action.item
            }
        default:
            return state
    }
}