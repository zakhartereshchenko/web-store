import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchFilters = createAsyncThunk(
    'filters/fetchFilters',
    async () => {
        const res = await axios({
                baseURL: 'http://localhost:3001/',
                url: 'filters',
                method: 'GET',
            })
            return res.data
    }
)


const filterSlice = createSlice({
    name: 'filters',
    initialState:{
        brands: [],
        storages: [],
        filtersLoadingStatus: 'idle',
    },
    reducers:{
        toggleCheckboxBrandFilter(state, action) {
            const toggledBrand = state.brands.find(filter => filter.id === action.payload.id)
            toggledBrand.isChecked = !toggledBrand.isChecked
        },
        toggleCheckboxStorageFilter(state, action) {
            const toggledStorage = state.storages.find(filter => filter.id === action.payload.id)
            toggledStorage.isChecked = !toggledStorage.isChecked
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilters.pending, (state) => {
                state.filtersLoadingStatus = 'loading'
            })
            .addCase(fetchFilters.fulfilled, (state, action) => {
                state.brands = action.payload.brands
                state.storages = action.payload.storages
                state.filtersLoadingStatus = 'idle'
            })
            .addCase(fetchFilters.rejected, (state) => {
                state.filtersLoadingStatus = 'error'
            })
            .addDefaultCase(()=>{})
    }
    
})

export const {toggleCheckboxBrandFilter, toggleCheckboxStorageFilter} = filterSlice.actions;

export default filterSlice.reducer