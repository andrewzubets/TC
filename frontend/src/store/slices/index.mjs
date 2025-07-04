import { combineSlices } from '@reduxjs/toolkit'
import counterSlice from './counterSlice.mjs'
import testSlice from './testSlice.mjs'
import authSlice from "./authSlice.mjs";

const rootReducer
    = combineSlices(counterSlice, testSlice, authSlice)
export default rootReducer;

