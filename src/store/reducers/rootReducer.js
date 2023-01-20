import appReducer from "./appReducer";
import musicReducer from "./musicReducer";
import { combineReducers } from "redux";
//combineReducers: để gom nhóm tất cả reducer
//applyMiddleware: để sử dụng middleware cho redux

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

const commonConfig = {
  storage: storage,
  stateReconciler: autoMergeLevel2,
}; //danh cho tat ca Reducer

const musicConfig = {
  ...commonConfig,
  key: "music",
  whitelist: ["curSongId"],
};

const rootReducer = combineReducers({
  app: appReducer,
  music: persistReducer(musicConfig, musicReducer),
});

export default rootReducer;
