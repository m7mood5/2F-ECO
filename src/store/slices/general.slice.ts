import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {generalStateTypes} from './generalSlice.type';
const initialState = {
  appVersion: 'LATEST_VERSION',
  theme: '',
};

const generalSlice = createSlice({
  name: 'generalSlice',
  initialState,
  reducers: {
    setAppVersion: (
      state,
      action: PayloadAction<generalStateTypes['appVersion']>,
    ) => {
      state.appVersion = action.payload;
    },
    setAppTheme: (
      state,
      action: PayloadAction<generalStateTypes['appTheme']>,
    ) => {
      state.theme = action.payload;
    },
  },
});

export const {setAppTheme, setAppVersion} = generalSlice.actions;
export default generalSlice.reducer;
