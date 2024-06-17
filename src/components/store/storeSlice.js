import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPhones = createAsyncThunk(
    'store/fetchPhones',
    async () => {
        const res = await axios({
                baseURL: 'http://localhost:3001/',
                url: 'phones',
                method: 'GET',
            })
            return res.data
    }
)


const storeSlice = createSlice({
    name: 'store',
    initialState:{
        items: [],
        itemsLoadingStatus: 'idle',
        amountOfItems: []
    },
    reducers:{
        addItem(state, action) {
            if(action.payload){
                state.items.push(action.payload)
            }
        },
        removeItem(state, action) {
            if(action.payload.id){
                state.items = state.items.filter(item => item.id !== action.payload.id)
            }
        },
        toggleItemComplete(state, action) {
            const toggledTodo = state.todos.find(todo => todo.id === action.payload.id)
            toggledTodo.completed = !toggledTodo.completed
        },
        setAmountOfItems(state, action) {
            state.amountOfItems = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPhones.pending, (state) => {
                state.itemsLoadingStatus = 'loading'
            })
            .addCase(fetchPhones.fulfilled, (state, action) => {
                state.items = action.payload
                state.itemsLoadingStatus = 'idle'
            })
            .addCase(fetchPhones.rejected, (state) => {
                state.itemsLoadingStatus = 'error'
            })
            .addDefaultCase(()=>{})
    }
    
})

export const {addItem, removeItem, toggleItemComplete, setAmountOfItems} = storeSlice.actions;

export default storeSlice.reducer