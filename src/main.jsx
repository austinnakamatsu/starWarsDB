import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './background.js'

import App, { ErrorPage, People, Films, Planets, Home, Person, PeopleHome, Planet, PlanetHome, Film, FilmHome } from './App'
import './index.css'

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <App><ErrorPage /></App>,
    children: [
      { index: true, element: <Home /> },
      { 
        path: "people", 
        element: <People />,
        children:[
          { path: ":person", element: <Person /> },
          { index: true, element: <PeopleHome />}
        ]
      },
      {
        path: "planets",
        element: <Planets />,
        children: [
          { path: ":planet", element: <Planet />},
          { index: true, element: <PlanetHome />}
        ]
      },
      {
        path: "films",
        element: <Films />, 
        children: [
          { path: ":film", element: <Film />},
          { index: true, element: <FilmHome />}
        ]
      },
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
