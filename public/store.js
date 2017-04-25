import { createStore } from 'redux'
import counterReducer from './reducers'

let store = createStore(counterReducer)

export default store;