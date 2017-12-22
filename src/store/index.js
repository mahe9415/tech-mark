import C from './constants'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';


export default store = createStore(
	appReducer,
	composeWithDevTools(applyMiddleware(thunk))
);


window.store =  store