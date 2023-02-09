import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

function getThemeFromLocalStorage(): boolean {
  const store = localStorage.getItem('store');
  if (store) {
    return JSON.parse(store).theme;
  } else {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState: getThemeFromLocalStorage(),
  reducers: {
    change: (state, { payload }) => {
      return payload;
    }
  }
});

export const { change } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
