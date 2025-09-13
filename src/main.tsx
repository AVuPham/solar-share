import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import routes from './routes'
import './index.css'

const router = createBrowserRouter(routes, {
  basename: "/solar-share",  // ⚡ fix trắng trang trên GitHub Pages
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
