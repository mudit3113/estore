import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    cartItems:[],
    totalItemsPrice:0,
    totalItems: 0,
    totalQuantity: 0
}

const cartSlice =createSlice({
    name: "cartSlice",
    initialState,
    reducers:{
        //action creator for adding item to cart and writing logic for it (reducer function)
        addCartItem: (state,action) => {
            let item_exists = state.cartItems.find((item) => item.id === action.payload.id)
            if(item_exists){
                item_exists.quantity +=1;
            }else{
                state.cartItems = [...state.cartItems, action.payload];
                state.totalItems = state.totalItems + 1;
            }
            state.totalQuantity = state.totalQuantity +1;
            state.totalItemsPrice = state.totalItemsPrice + action.payload.price;

            console.log(state.cartItems);
        },
        updateItemQuantity : (state,action) => {
            let index = action.payload.key 

            if(action.payload.operator === '+'){
                state.cartItems[index].quantity +=1;
                state.totalQuantity = state.totalQuantity +1;
                state.totalItemsPrice = state.totalItemsPrice + action.payload.item.price;
            }else{
                if(state.cartItems[index].quantity>1){
                state.cartItems[index].quantity -=1;
                state.totalQuantity = state.totalQuantity -1;
                state.totalItemsPrice = state.totalItemsPrice - action.payload.item.price;
            }
            }
        },
        removeCartItem: (state,action) => {
            let filteredCart = state.cartItems.filter((elem) =>{
                return elem.id != action.payload.id;
            })

            state.cartItems = filteredCart;

            state.totalItems = state.totalItems -1;
            state.totalItemsPrice = state.totalItemsPrice - (action.payload.price*action.payload.quantity);
            state.totalQuantity = state.totalQuantity - action.payload.quantity
        }

    }
})

//exporting the action creator to be used in product component
export const {addCartItem,updateItemQuantity,removeCartItem} = cartSlice.actions;

export default cartSlice.reducer;