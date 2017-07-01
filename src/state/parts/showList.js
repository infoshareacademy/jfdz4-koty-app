const initialState = {
    showList: null
}

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SHOW__LIST':
            return {
                ...state,
                showList: action.showList
            }
        default:
            return state
    }
}