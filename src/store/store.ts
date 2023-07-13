import { configureStore } from '@reduxjs/toolkit';

import trainsCharacteristicsReducer from './slices/trainsCharacteristicsSlice';

const store = configureStore({
    reducer: {
        trains: trainsCharacteristicsReducer,
    },
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export default store;