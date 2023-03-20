import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name:'user',
    initialState:{
        isAuth:false,
        user:{
            id:"",
            fullName:"",
            email:"",
            phone:"",
            role:"customer",
        },
        token:"",
    },
    reducers:{
        // redux a ait stateleri güncellemek için yazılacak fonksiyonlar;
        login:(state,action) => {
            state.user = {...action.payload.user};
            state.isAuth = true;
            state.token = action.payload.token;
        },
        logout:(state) => {
            state.user = {
                id:"",
                fullName:"",
                email:"",
                phone:"",
                role:"customer"  
            };
            state.isAuth = false;
            state.token = "";
        }
    }
});

export const userActions = userSlice.actions;
export default userSlice.reducer;