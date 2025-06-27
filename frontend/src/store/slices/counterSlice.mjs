import { createAppSlice } from '../createAppSlice.mjs'
import { createSlice } from '@reduxjs/toolkit'


const initialState = { value: 0 }

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            console.log('increment', state)
           state.value++
        },
        decrement(state) {
            console.log('decrement')
            state.value--
        },
        incrementByAmount(state, action) {
            console.log('incrementByAmount')
            state.value += action.payload
        },
    },
    selectors: {
        selectCount: state => {
            return state.value
        },
        // selectStatus: counter => counter.status,
    },
})



export const {
    increment,
    decrement,
    incrementByAmount
} = counterSlice.actions

const reducer = counterSlice.reducer

export default counterSlice;
const {
    selectCount
} = counterSlice.selectors

export {
    selectCount,
    reducer
}
// const selectCount = state => {
//     console.log('selectCount',state);
//     return state.counter.value
// };
