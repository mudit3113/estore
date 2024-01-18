import {createSlice} from "@reduxjs/toolkit";

const initialState = [
    {
        category: "Men",
        items:['Coats','Boots','Party Wear', 'Shirts','Lingerie']
    },{
        category: "Women",
        items:['Coats','Boots','Party Wear', 'Shirts','Lingerie']
    },{
        category: "Kids",
        items:['Coats','Boots','Party Wear', 'Shirts','Lingerie']
    }
]

const accordionCatSlice = createSlice({
    name:"AccordianSlice",
    initialState
})

export default accordionCatSlice;