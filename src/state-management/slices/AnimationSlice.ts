import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { initialState } from './presets/AnimationPreset';
import { UIBranches } from '../models/UIBranches';
import { CharacterStats } from '../models/CharacterStats';

export type UpdateTokenPayload = {
  token: number,
  currentPage: UIBranches | undefined
}

export const AnimationSlice = createSlice({
  name: 'animationSlice',
  initialState,
  reducers: {
    nextFrame: (state, message: PayloadAction<Map<UIBranches, CharacterStats[]>>) => {
      state.characterTracker = message.payload;
    },
    updateToken: (state, message: PayloadAction<UpdateTokenPayload>) => {
      state.identifier = message.payload.token;
      if(message.payload.currentPage !== undefined) {
        state.previousPage = state.currentPage;
        state.currentPage = message.payload.currentPage;
      }
    },
    clearToken: (state) => {
        state.identifier = -1;
    },
    setPages: (state, message: PayloadAction<UIBranches>) => {
      state.previousPage = state.currentPage;
      state.currentPage = message.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { nextFrame, updateToken, clearToken, setPages } = AnimationSlice.actions

export default AnimationSlice.reducer