import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilter(state, action) {
      state = action.payload; //записать сюда данные из поля ввода input
      return state;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReduser = filterSlice.reducer;
