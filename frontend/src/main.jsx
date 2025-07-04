import { createRoot } from 'react-dom/client'
import {Provider, useDispatch} from "react-redux"
import {HomePage, LoginPage} from './pages/index.mjs'

import { store } from './store/store.mjs'
import {
    createBrowserRouter,
    RouterProvider, useLoaderData,
} from 'react-router'
import ErrorPage404 from './pages/errors/Page404.jsx'
import {fetchUser} from "./store/slices/authSlice.mjs";


let router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/login",
        Component: LoginPage
    },
    {
        path:'*',
        Component: ErrorPage404,
    }
]);



createRoot(document.getElementById('app-root')).render(
    <Provider store={store}>
         <RouterProvider router={router} />
    </Provider>);
