import { createStore } from 'redux'
import reducer from './state/reducer'

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {}
const store = createStore(
    reducer,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


export default store