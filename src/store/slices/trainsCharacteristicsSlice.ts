import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { INewCharacteristicsOfTrain, INewTrain, ITrainInfo } from '../../../models';

const initialState: ITrainInfo = {
    isOpen: false,
    activeCharacteristicsOfTrain: [],
    trainName: '',
    trainsArr: [],
    newSpeed: undefined,
    newForce: undefined,
    newEngineAmperage: undefined
};

const trainsCharacteristicsSlice = createSlice({
    name: 'trainsCharacteristics',
    initialState,
    reducers: {
        openPopupWithTrainInfo(
            state,
            action: PayloadAction<{isOpen: boolean, activeCharacteristicsOfTrain: INewCharacteristicsOfTrain[], trainName: string}>
        ) {
            state.isOpen = action.payload.isOpen;
            state.activeCharacteristicsOfTrain = action.payload.activeCharacteristicsOfTrain;
            state.trainName = action.payload.trainName
        },

        handleTrainsInfo(state, action: PayloadAction<{trainsArr: INewTrain[]}>) {
            state.trainsArr = action.payload.trainsArr;
        },

        handleValueNewSpeedOfTrain(state, action: PayloadAction<{newSpeed: number | undefined, _id: string}>) {
            const item: INewCharacteristicsOfTrain | undefined = state.activeCharacteristicsOfTrain.find((info) => info._id === action.payload._id);
            // item && (item.speed = action.payload.newSpeed);

            if (item) {
                // console.log(item);
                // console.log(item.speed);
                // console.log(state.activeCharacteristicsOfTrain);
                // console.log(action.payload.newSpeed);
                // console.log(action.payload._id);

                const updatedItem: INewCharacteristicsOfTrain = {
                    ...item,
                    speed: action.payload.newSpeed
                };
                const updatedIndex = state.activeCharacteristicsOfTrain.findIndex((info) => info._id === action.payload._id);
                state.activeCharacteristicsOfTrain[updatedIndex] = updatedItem;

            }
        },

        handleValueNewForcesOfTrain(state, action: PayloadAction<{newForce: number | undefined, _id: string}>) {
            const item: INewCharacteristicsOfTrain | undefined = state.activeCharacteristicsOfTrain.find((info) => info._id === action.payload._id);
            item && (item.force = action.payload.newForce);
        },

        handleValueNewEngineAmperageOfTrain(state, action: PayloadAction<{newEngineAmperage: number | undefined, _id: string}>) {
            const item: INewCharacteristicsOfTrain | undefined = state.activeCharacteristicsOfTrain.find((info) => info._id === action.payload._id);
            item && (item.engineAmperage = action.payload.newEngineAmperage);
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
