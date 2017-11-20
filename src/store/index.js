import C from './constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'


export default store = createStore(
	appReducer,
	applyMiddleware(thunk)
);


