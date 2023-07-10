import { configureStore } from '@reduxjs/toolkit';

import trainCharacteristicsReducer from './slices/trainCharacteristicsSlice';


const store = configureStore({
    reducer: {
        trainCharacteristics: trainCharacteristicsReducer,
    },
    devTools: true,
});

// export type RootState = ReturnType<typeof store.getState>

export default store