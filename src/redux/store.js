import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { usersApi } from "./usersApi";
import { followersSlice } from "./slice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "followers",
  storage,
  whitelist: ["followers"],
};

const followersReducer = persistReducer(persistConfig, followersSlice.reducer);

export const store = configureStore({
  reducer: {
    followers: followersReducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    usersApi.middleware,
  ],
});

export const persistor = persistStore(store);

setupListeners(store.dispatch);
