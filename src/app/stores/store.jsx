import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import { reactReduxFirebase, getFirebase } from "react-redux-firebase"
import { reduxFirestore, getFirestore } from "redux-firestore"
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer.jsx"

const middlewares = [thunk]
const middlewareEnhancer = applyMiddleware(...middlewares)
const storeEnhancers = [middlewareEnhancer]
const composedEnhancer = composeWithDevTools(...storeEnhancers)

const store = createStore(rootReducer)

export default store
