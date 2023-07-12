import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { ICharacteristicsOfTrain, ITrain, ITrainInfo } from '../../../models';

const initialState: ITrainInfo = {
    isOpen: false,
    activeCharacteristicsOfTrain: [],
    trainName: '',
    trainsArr: [],
    newSpeed: 0,
    newForce: 0,
    newEngineAmperage: 0
};

const trainsCharacteristicsSlice = createSlice({
    name: 'trainsCharacteristics',
    initialState,
    reducers: {
        openPopupWithTrainInfo(
            state,
            action: PayloadAction<{isOpen: boolean, activeCharacteristicsOfTrain: ICharacteristicsOfTrain[], trainName: string}>
        ) {
            state.isOpen = action.payload.isOpen;
            state.activeCharacteristicsOfTrain = action.payload.activeCharacteristicsOfTrain;
            state.trainName = action.payload.trainName
        },

        handleTrainsInfo(state, action: PayloadAction<{trainsArr: []}>) {
            state.trainsArr = action.payload.trainsArr;

            // action.payload.trainsArr.forEach(item => {
            //     state.trainsArr.push(item);
            // });
        },

        handleValueNewSpeedOfTrain(state, action: PayloadAction<{newSpeed: number}>) {
            state.newSpeed = action.payload.newSpeed;
        },

        handleValueNewForcesOfTrain(state, action: PayloadAction<{newForce: number}>) {
            state.newForce = action.payload.newForce;
        },

        handleValueNewEngineAmperageOfTrain(state, action: PayloadAction<{newEngineAmperage: number}>) {
            state.newEngineAmperage = action.payload.newEngineAmperage;
        }
    },
});

export const {
    openPopupWithTrainInfo,
    handleTrainsInfo,
    handleValueNewSpeedOfTrain,
    handleValueNewForcesOfTrain,
    handleValueNewEngineAmperageOfTrain
} = trainsCharacteristicsSlice.actions;
export default trainsCharacteristicsSlice.reducer;
