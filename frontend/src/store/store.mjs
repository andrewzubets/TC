import { combineSlices, configureStore } from "@reduxjs/toolkit"
import rootReducer from './slices/index.mjs'
import { setupListeners } from "@reduxjs/toolkit/query"

console.log('rootReducer', rootReducer);
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

const store
    = makeStore({
    counter: {value: 0}
})
console.log(store.getState());

export { store }