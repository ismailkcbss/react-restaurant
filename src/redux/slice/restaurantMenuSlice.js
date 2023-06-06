import { createSlice } from '@reduxjs/toolkit'


const restaurantMenuSlice = createSlice({
    name: 'restaurantMenu',
    initialState: {
        restaurantMenu: {
            id: "",
            title: "",
            description: "",
            img: "",
            price: "",
        },
    },

    reducers: {
        set: (state, action) => {
            state.restaurantMenu = { ...action.payload };
        },
        setInitial: (state) => {
            state.restaurantMenu = {
                id: "",
                title: "",
                description: "",
                img: "",
                price: "",
            };
        },

    }
});

export const restaurantMenuActions = restaurantMenuSlice.actions;
export default restaurantMenuSlice.reducer;
