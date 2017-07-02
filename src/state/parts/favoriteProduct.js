const initialState = {
    addFavorite: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'products/ADD__FAVORITE':
            return {
                ...state,
                addFavorite: [...state.addFavorite, action.addFavorite]
            }
        default:
            return state
    }
}