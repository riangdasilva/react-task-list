import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { Task } from '../types/Task';

function getInitialStateFromLocalStorage(): Task[] {
  const tasks = localStorage.getItem('store');
  if (tasks) {
    return JSON.parse(tasks).tasks;
  } else {
    return [];
  }
}

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: getInitialStateFromLocalStorage() as Task[],
  reducers: {
    add: (state, { payload }) => {
      return [...state, payload];
    },
    remove: (state, { payload }) => {
      return state.filter((task) => task.id !== payload);
    },
    edit: (state, { payload }) => {
      return state.map((task) => {
        if (task.id === payload.id) {
          return payload;
        } else {
          return task;
        }
      });
    },
    reorder: (state, { payload }) => {
      const { startIndex, endIndex } = payload;
      const result = Array.from(state);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);
      return result;
    }
  }
});

export const { add, remove, edit, reorder } = tasksSlice.actions;

export const selectTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
