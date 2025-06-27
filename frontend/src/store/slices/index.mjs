import { combineSlices } from '@reduxjs/toolkit'
import counterSlice from './counterSlice.mjs'
import testSlice from './testSlice.mjs'

const rootReducer
    = combineSlices(counterSlice, testSlice)
export default rootReducer;

