import { createSlice } from '@reduxjs/toolkit'
import { initialState } from './presets/ControlPanelPreset';


export const ControlPanelSlice = createSlice({
  name: 'controlPanelSlice',
  initialState,
  reducers: {
    openControlPanel: (state) => {
      state.openControlPanel = true;
    },
    closeControlPanel: (state) => {
      state.openControlPanel = false;
    }
  },
})

// Action creators are generated for each case reducer function
export const { openControlPanel, closeControlPanel } = ControlPanelSlice.actions

export default ControlPanelSlice.reducer