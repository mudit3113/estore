import {createAsyncThunk} from "@reduxjs/toolkit";

export const getProducts = createAsyncThunk(
    'getProducts',
    async () => {
        const productData = await fetch("http://localhost:5001/getProduct")
        .then((res) => res.json())

        return productData;
    }


)