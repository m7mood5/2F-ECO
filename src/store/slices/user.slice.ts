import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    data: null,
    error: null,
  },
  reducers: {
    setUserAction: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    setUserErrorAction: (state, action) => {
      state.error = action.payload;
    },
    clearUserAction: state => {
      state.data = null;
      state.error = null;
    },
  },
});

export const {setUserAction, setUserErrorAction, clearUserAction} = userSlice.actions;

export default userSlice.reducer;
