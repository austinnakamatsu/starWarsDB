import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App, { People, Films, Planets, Home } from './App'

import './index.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        // errorElement: <App><ErrorPage /></App>,
        children: [
            { index: true, element: <Home /> },
            { path: "people", element: <People /> },
            { path: "Planets", element: <Planets /> },
            { path: "films", element: <Films /> },
            {
                // path: "menu",
                // element: <Menu />,
                // children: [
                //     { path: ":menuItem", element: <MenuItem /> },
                //     { index: true, element: <Specials /> }
                // ]
            }
        ]
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <App />
//     </React.StrictMode>,
// )
