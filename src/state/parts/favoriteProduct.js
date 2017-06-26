const initialState = {
    setFavorite: ''
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'products/ADD_FAVORITE':
            return {
                ...state,
                setFavorite: action.value
            }
        default:
            return state
    }
}