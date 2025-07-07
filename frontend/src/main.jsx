import { createRoot } from 'react-dom/client'
import {Provider} from "react-redux"
import {HomePage, LoginPage, PersonalPage} from './pages/index.mjs'

import { store } from './store/store.mjs'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router'
import ErrorPage404 from './pages/errors/Page404.jsx'



let router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage
    },
    {
        path: "/user/:id",
        Component: PersonalPage
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
