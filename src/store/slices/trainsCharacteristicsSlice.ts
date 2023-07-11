import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICharacteristicsOfTrain, ITrain, ITrainInfo } from '../../../models';

const initialState: ITrainInfo = {
    isOpen: false,
    activeCharacteristicsOfTrain: [],
    trainsArr: []
};

const trainsCharacteristicsSlice = createSlice({
    name: 'trainsCharacteristics',
    initialState,
    reducers: {
        openPopupWithTrainInfo(state, action: PayloadAction<{isOpen: boolean, activeCharacteristicsOfTrain: ICharacteristicsOfTrain[]}>) {
            state.isOpen = action.payload.isOpen;
            state.activeCharacteristicsOfTrain = action.payload.activeCharacteristicsOfTrain;
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
