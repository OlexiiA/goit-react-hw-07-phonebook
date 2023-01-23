import { combineReducers, configureStore } from "@reduxjs/toolkit";
import contactReduser from "./contactSlice";
import { persistStore, persistReducer,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


const persistConfig = {
    key: 'root',
    storage,
  };

  const rootReducer = combineReducers({
    contacts: contactReduser,
  })

  const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer:  persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;