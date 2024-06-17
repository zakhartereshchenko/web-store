import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const fetchSorter = createAsyncThunk(
    'filters/fetchSorter',
    async () => {
        const res = await axios({
                baseURL: 'http://localhost:3001/',
                url: 'sortOptions',
                method: 'GET',
            })
            return res.data
    }
)


const sorterSlice = createSlice({
    name: 'sorter',
    initialState:{
        sortOptions: [],
        activeSortOption: "",
        sorterLoadingStatus: 'idle',
    },
    reducers:{
        setActiveSortOption(state, action) {
            state.activeSortOption = state.sortOptions.find(item => item.id === action.payload).id
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSorter.pending, (state) => {
                state.sorterLoadingStatus = 'loading'
            })
            .addCase(fetchSorter.fulfilled, (state, action) => {
                state.sortOptions = action.payload
                state.sorterLoadingStatus = 'idle'
            })
            .addCase(fetchSorter.rejected, (state) => {
                state.sorterLoadingStatus = 'error'
            })
            .addDefaultCase(()=>{})
    }
    
})

export const {setActiveSortOption} = sorterSlice.actions;

export default sorterSlice.reducer