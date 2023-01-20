import rootReducer from "./store/reducers/rootReducer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist"; //store lưu giữ những Reducer

//createStore: tạo store
//applyMiddleware: bên đây cần apply middleware sau khi tạo store

const reduxConfig = () => {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return [store, persistor];
};

export default reduxConfig;
