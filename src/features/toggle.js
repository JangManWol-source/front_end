import { createSlice } from '@reduxjs/toolkit';

const toggle = createSlice({
    name: 'toggle',
    initialState: {
        drawerIsOpen: false
    },
    reducers: {
        toggleDrawer(state) {
            state.drawerIsOpen = !state.drawerIsOpen;
        }
    }
})

export const { toggleDrawer } = toggle.actions;
export default toggle.reducer;