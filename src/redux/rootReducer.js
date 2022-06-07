import { combineReducers, legacy_createStore as createStore } from "redux";
import taiXiuReducer from "./reducer/taiXiuReducer";
import xucXacReducer from "./reducer/xucXacReducer";
const rootReducer = combineReducers({
  // reducer
  xucXacReducer: xucXacReducer,
  taiXiuReducer: taiXiuReducer,
});

const store = createStore(rootReducer);

export { store };
export default rootReducer;
