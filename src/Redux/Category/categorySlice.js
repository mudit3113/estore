import {createSlice} from "@reduxjs/toolkit";
import { getCategories } from "./action";

const initialState = {
    categories:[],
    status: "idle",
    error: ""
}

const categorySlice = createSlice({
    name:"Category",
    initialState,
    reducer:{},
    extraReducers:{
        [getCategories.pending]: (state,action) => {
            state.status = "Loading..."
        },
        [getCategories.fulfilled] :(state,action) => {
            state.status = "Success";
            state.categories = action.payload;
        },
        [getCategories.rejected] : (state,action) => {
            state.status = "Failed";
            state.error = action.error.message;
        }
    }
})

export default categorySlice.reducer;