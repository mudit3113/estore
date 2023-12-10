import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  favouriteItems: [],
  totalItems: 0,
}

const favouriteSlice = createSlice({
  name: 'favouriteSlice',
  initialState,
  reducers: {
    //action creator for adding item to cart and writing logic for it (reducer function)
    addFavouriteItem: (state, action) => {
      console.log('action.payload', action.payload)
      state.favouriteItems = [...state.favouriteItems, action.payload]
      state.totalItems = state.totalItems + 1

      console.log(state.favouriteItems)
    },
    removeFavouriteItem: (state, action) => {
      console.log('action payload in removal', action.payload)
      let filteredFavourite = state.favouriteItems.filter((elem) => {
        return elem.id != action.payload
      })

      state.favouriteItems = filteredFavourite

      state.totalItems = state.totalItems - 1
    },
  },
})

//exporting the action creator to be used in product component
export const { addFavouriteItem, removeFavouriteItem } = favouriteSlice.actions

export default favouriteSlice.reducer
