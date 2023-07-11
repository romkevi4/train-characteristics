import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { Itrain, ItrainInfo } from '../../../models';

const initialState: ItrainInfo = {
    isOpen: false,
    trainsArr: [],
    // id: ''
};

const trainsCharacteristicsSlice = createSlice({
    name: 'trainsCharacteristics',
    initialState,
    reducers: {
        openPopupWithTrainInfo(state, action: PayloadAction<{isOpen: boolean}>) {
            state.isOpen = action.payload.isOpen;
        },

        handleTrainsInfo(state, action: PayloadAction<{trainsArr: []}>) {
            state.trainsArr = action.payload.trainsArr;

            // action.payload.trainsArr.forEach(item => {
            //     state.trainsArr.push(item);
            // });
        },
    },
});

export const { openPopupWithTrainInfo, handleTrainsInfo } = trainsCharacteristicsSlice.actions;
export default trainsCharacteristicsSlice.reducer;
