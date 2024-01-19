import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    res :0
}

const calculatorSlice = createSlice({
    name:"calculator",
    initialState,
    reducers:({
        add:(state,action)=>{
            state.res=state.res+action.payload;
        },
        subtract:(state,action)=>{
            state.res=state.res-action.payload;
            // state.res = state.res-action.payload
        },
        // multiply:(state,action)=>{
        //     // return{
        //     //     ...state,
        //     //     res:state.res*action.payload
        //     //     }
        //     state.res = 
        // }

    })
})

export const {add,subtract} = calculatorSlice.actions;

export default calculatorSlice.reducer