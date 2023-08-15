import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { reducerAddToCart } from './reducerAddToCart'
import { buttonReducer } from './reducers'

const rootReducer = combineReducers({
    toogBtn: buttonReducer,
    basket : reducerAddToCart
})

export const store = configureStore({
    reducer:rootReducer

})