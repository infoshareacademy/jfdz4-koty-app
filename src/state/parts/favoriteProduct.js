const initialState = {
    addFavorite: 'japczko'
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'products/ADD_FAVORITE':
            return {
                ...state,
                addFavorite: action.addFavorite
            }
        default:
            return state
    }
}