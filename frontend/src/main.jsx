import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux"
import {HomePage, LoginPage} from './pages/index.mjs'

import { store } from './store/store.mjs'
import {
    createBrowserRouter,
    RouterProvider, useLoaderData,
} from 'react-router'
import NotFoundPage from './pages/NotFoundPage.jsx'

let router = createBrowserRouter([
    {
        path: "/",
        Component: HomePage,
        loader: loadRootData,
    },
    {
        path: "/login",
        Component: LoginPage,
        loader: loadRootData
    },
    {
        path:'*',
        Component: NotFoundPage,
    }
]);

function About(props){
    let data = useLoaderData();
    console.log('about props', data)
    return (<h1>About</h1>);
}
function loadRootData(){
    console.log('loadRootData');
    return {
        td:123
    }
}

createRoot(document.getElementById('app-root')).render(
    <Provider store={store}>
         <RouterProvider router={router} />
    </Provider>);
