import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { buttonReducer } from './reducers'

const rootReducer = combineReducers({
    toogBtn: buttonReducer
})

export const store = configureStore({
    reducer:rootReducer

})