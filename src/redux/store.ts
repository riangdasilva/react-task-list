import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from './tasksSlice';
import themeSlice from './themeSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    theme: themeSlice
  }
});

store.subscribe(() => {
  localStorage.setItem('store', JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
