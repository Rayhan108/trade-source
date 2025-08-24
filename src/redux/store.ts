import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import contractorReducer from './features/contractor/contractorSlice';
import { baseApi } from './api/baseApi';
import storage from 'redux-persist/lib/storage';
import { persistStore } from 'redux-persist';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage,
};

const persistConfigContractor = {
  key: 'contractor',
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);

const persistedContractorReducer = persistReducer(
  persistConfigContractor,
  contractorReducer
);

export const makeStore = () => {
  return configureStore({
    reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      auth: persistedAuthReducer,
      contractor: persistedContractorReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(baseApi.middleware),
  });
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = AppStore['dispatch'];
export const persistor = persistStore(makeStore());
