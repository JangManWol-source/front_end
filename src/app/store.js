import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../features/toggle.js';
export const store = configureStore({
    reducer: {
        toggle: toggleReducer
    },
});