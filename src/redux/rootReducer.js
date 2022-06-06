import { combineReducers, legacy_createStore as createStore } from "redux";
import xucXacReducer from "./reducer/xucXacReducer";
const rootReducer = combineReducers({
  // reducer
  xucXacReducer: xucXacReducer,
});

const store = createStore(rootReducer);

export { store };
export default rootReducer;
