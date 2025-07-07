import {configureStore} from "@reduxjs/toolkit"
import rootReducer from './slices/index.mjs'

const preloadedState = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

export const makeStore = (preloadedState) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    })
}

const store
    = makeStore(preloadedState)

export { store }