import { createStore, applyMidleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'react-thunk'
import rootReducer from './reducers'

const initialState = {}

const middleware = [thunk]

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMidleware(...middleware))
)

export default store