import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ItrainInfo } from '../../../models';

const initialState = {
    isOpen: false,
    // trainObj: {},
    // id: ''
} as ItrainInfo;

const trainCharacteristicsSlice = createSlice({
    name: 'trainCharacteristics',
    initialState,
    reducers: {
        openPopupWithTrainInfo(state, action: PayloadAction<object>) {
            state.isOpen = action.payload.isOpen;
        },
    },
});

export const { openPopupWithTrainInfo } = trainCharacteristicsSlice.actions;
export default trainCharacteristicsSlice.reducer;
