import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./filters/slice";
import { contactReducer } from "./contacts/slice";
import { authReducer } from "./auth/slice";


const authPersistConfig = {
  key: "auth",
  version: 1,
  storage,
  whitelist: ["token"], 
};

export const store = configureStore({
  reducer: {
    contacts: contactReducer, 
    filters: filtersReducer, 
    auth: persistReducer(authPersistConfig, authReducer), 
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);













// import { configureStore } from "@reduxjs/toolkit";
// import { filtersReducer } from "/src/redux/filters/slice";
// import { contactReducer } from "/src/redux/contacts/slice";

// export const store = configureStore({
//   reducer: {
//     contacts: contactReducer,
//     filters: filtersReducer,
//   },
// });





























// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from '/src/redux/contactsSlice.js';
// import filtersReducer from '/src/redux/filtersSlice.js';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { combineReducers } from 'redux';

// const persistedContactsConfig = {
//   key: 'contacts',
//   storage,
// };

// const rootReducer = combineReducers({
//   contacts: persistReducer(persistedContactsConfig, contactsReducer),
//   filters: filtersReducer,
// });

// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,
//     }),
// });

// export const persistor = persistStore(store);
// export default store;