import { combineSlices, configureStore } from "@reduxjs/toolkit"
import rootReducer from './slices/index.mjs'
import { setupListeners } from "@reduxjs/toolkit/query"


export const makeStore = (preloadedState) => {
    const store = configureStore({
        reducer: rootReducer,
        // Adding the api middleware enables caching, invalidation, polling,
        // and other useful features of `rtk-query`.
        // middleware: getDefaultMiddleware => {
        //     return getDefaultMiddleware().concat(quotesApiSlice.middleware)
        // },
        preloadedState,
    })
    // configure listeners using the provided defaults
    // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
   // setupListeners(store.dispatch)
    return store
}

const preloadedState = window.__PRELOADED_STATE__ || {};
delete window.__PRELOADED_STATE__;

const store
    = makeStore(preloadedState)

export { store }