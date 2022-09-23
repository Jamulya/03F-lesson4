import {applyMiddleware, compose, createStore} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReduer from './reducers'

const initialState = {}

const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose
const composeEnhancers = composeFunc(applyMiddleware(thunk))
const store = createStore(rootReduer(),initialState,composeEnhancers)

export default store