import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import getCategories from "../../services/category-service";

export const fetchCategories = createAsyncThunk("Fetch/Categories", async () => {
  const res = await getCategories();
  return res
})

const CategoriesSlice = createSlice({
    name: "CategoriesSlice",
    initialState: {
        categories: [],
        status: 'idle',
        error: null
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchCategories.pending, (state) => {
            state.status = 'loading'
        })
        .addCase(fetchCategories.fulfilled, (state, action) => {
            state.status = 'successful'
            state.categories = action.payload
        })
        .addCase(fetchCategories.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.payload.message
        })
    }
})

export default CategoriesSlice.reducer;