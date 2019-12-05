import { createStore, applyMidleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'react-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleWare = [thunk]

const store = createStore()