import {legacy_createStore, applyMiddleware, combineReducers} from "redux";
 import thunk from "redux-thunk";
import {reducer as AppReducer} from "./AppReducer/reducer";
import {reducer as AuthReducer} from "./AuthReducer/reducer";

//const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  const rootReducer=combineReducers({
   AppReducer,
   AuthReducer
 });
export const store = legacy_createStore(
   rootReducer,(applyMiddleware(thunk))
 );
