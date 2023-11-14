import { combineReducers, configureStore } from '@reduxjs/toolkit'
import reducerList from './listeItems/reducerList'
import { buttonReducer } from './reducers'

const rootReducer = combineReducers({
    toogBtn: buttonReducer,
    basket : reducerAddToCart,
    listItems : reducerList,
    
})

export const store = configureStore({
    reducer:rootReducer

})