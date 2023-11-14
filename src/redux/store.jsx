import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducerList from './listeItems/reducerList'
import { buttonReducer } from './reducers'
import { reducerAddToCart } from './cart/reducerAddToCart'

const rootReducer = combineReducers({
    toogBtn: buttonReducer,
    basket : reducerAddToCart,
    listItems : reducerList,
    
})

export const store = configureStore({
    reducer:rootReducer

})