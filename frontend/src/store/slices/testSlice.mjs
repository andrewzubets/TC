import { createAppSlice } from '../createAppSlice.mjs'
import { createSlice } from '@reduxjs/toolkit'


const initialState = { value: '' }

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        setValue(state, action) {
            state.value = action.payload
        },
    },
    selectors: {
        selectValue: state => {
            console.log(state);
            return state.value
        }
    }
})

export const {
    setValue
} = testSlice.actions
export default testSlice

const {
    selectValue
} = testSlice.selectors
export {

    selectValue
}