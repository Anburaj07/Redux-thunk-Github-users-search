import { applyMiddleware, compose, legacy_createStore } from "redux";
import { authReducer } from "./AuthReducer";
import thunk from "redux-thunk";
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

export const store=legacy_createStore(authReducer,composeEnhancers(applyMiddleware(thunk)))