import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CharacterTracker, initialState } from './presets/AnimationPreset';
import { UIBranch } from '../models/UIBranch';
import { CharacterStats } from '../models/CharacterStats';

export type UpdateTokenPayload = {
  token: number,
  currentPage: UIBranch | undefined
}

export type UpdateFramePayload = {
  uiBranch: UIBranch,
  charStats: CharacterStats[]
}

export const AnimationSlice = createSlice({
  name: 'animationSlice',
  initialState,
  reducers: {
    nextFrame: (state, message: PayloadAction<UpdateFramePayload>) => {
      const index: number = state.characterTracker.findIndex(entry => entry.page == message.payload.uiBranch);
      let holdOver: CharacterTracker[] = [...state.characterTracker];
      holdOver[index].chars = message.payload.charStats;
      state.characterTracker = holdOver;
    },
    updateToken: (state, message: PayloadAction<UpdateTokenPayload>) => {
      let newState = {...state};

      newState.identifier = message.payload.token;
      if(message.payload.currentPage !== undefined) {
        newState.previousPage = state.currentPage;
        newState.currentPage = message.payload.currentPage;
      }
      state = newState;
    },
    clearToken: (state) => {
        state = {...state, identifier: -1};
    },
    setPages: (state, message: PayloadAction<UIBranch>) => {
      state = {...state, previousPage: state.currentPage, currentPage: message.payload}
    }
  },
})

// Action creators are generated for each case reducer function
export const { nextFrame, updateToken, clearToken, setPages } = AnimationSlice.actions

export default AnimationSlice.reducer