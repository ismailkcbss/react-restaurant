import { createSlice } from '@reduxjs/toolkit'

const restaurantSlice = createSlice({
    name:'restaurant',
    initialState:{
        restaurant:{
            id:"",
            name:"",
            city:"",
            address:"",
            email:"",
            description:"",
            isWifi:false,
            type:0,
        },
    },
    reducers:{
        // redux a ait stateleri güncellemek için yazılacak fonksiyonlar;
        set:(state,action) => {
            state.restaurant = {...action.payload};
        },
        setInitial:(state) => {
            state.restaurant = {
                id:"",
                fullName:"",
                email:"",
                password:"",
                phone:"",
            };
        }

    }
});

export const restaurantActions = restaurantSlice.actions;
export default restaurantSlice.reducer;