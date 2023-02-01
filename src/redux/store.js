import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";

import logger from "redux-logger";
import thunk from "redux-thunk";
import productsReducer from "./reducer/productReducer";

const combReducer = combineReducers({
  products: productsReducer,
});
const store = createStore(combReducer, applyMiddleware(logger, thunk));

export default store;
