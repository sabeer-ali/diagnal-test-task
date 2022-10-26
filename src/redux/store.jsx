import { createStore } from "redux";
import RootReducer from "./reducers/index";

function configureStore(state = { list: [], search: "" }) {
  return createStore(RootReducer, state);
}

export default configureStore;
