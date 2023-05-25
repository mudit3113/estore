import {createSlice} from "@reduxjs/toolkit";
import { getProducts } from "./productAction";

const initialState = {
    products:[],
    status:"idle",
    error:""
}

const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        //action creator for filtering products and defining the logic what we wiil do 
        filterProducts : (state,action) => {
            const filteredData = action.payload.products.filter((elem) => {
                return elem.categoryid === action.payload.selectedCategory.id;
            })

            state.products = filteredData;

        },

        filterByPrice : (state,action) =>{
            const filteredData = action.payload.products.filter((elem) => {
                return elem.price>= action.payload.minPriceLimit && 
                elem.price<=action.payload.maxPriceLimit
            })
            state.products = filteredData;
        }
    },
    extraReducers:{
        [getProducts.pending] : (state,action) => {
            state.status = "Loading..."
        },
        [getProducts.fulfilled] : (state,action) => {
            state.status = "Success";
            state.products = action.payload;
        },
        [getProducts.rejected] : (state,action) => {
            state.status = "Rejected";
            state.error = action.error.message
        }
        }
})

//exporting the action creator so that component can trigger this action 
export const {filterProducts,filterByPrice} = productSlice.actions;

export default productSlice.reducer;