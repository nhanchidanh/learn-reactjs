import appReducer from "./appReducer";
import { combineReducers } from "redux";
//combineReducers: để gom nhóm tất cả reducer
//applyMiddleware: để sử dụng middleware cho redux

const rootReducer = combineReducers({
  app: appReducer,
});

export default rootReducer;
