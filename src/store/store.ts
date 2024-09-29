import {configureStore} from '@reduxjs/toolkit';
import logger from 'redux-logger';
// slices here
import generalSlice from './slices/general.slice';
import userReducer from './slices/user.slice';

const store = configureStore({
  reducer: {
    general: generalSlice,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}).concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
