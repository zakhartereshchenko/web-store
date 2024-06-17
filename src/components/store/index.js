import {configureStore} from '@reduxjs/toolkit'
import storeReducer from './storeSlice'
import filterReducer from './filterSlice'
import sorterReducer from './sorterSlice'

const stringMiddleware = () => (next) => (action) => {
    if(typeof action === 'string'){
        return next({
            type: action
        })  
    }
    return next(action)
};

export default configureStore({
    reducer: {
        store: storeReducer,
        filters: filterReducer,
        sorter: sorterReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})