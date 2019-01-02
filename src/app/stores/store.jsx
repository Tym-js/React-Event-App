import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "../reducers/rootReducer.jsx";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
