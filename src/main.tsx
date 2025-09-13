import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './index.css'

const redirect = sessionStorage.getItem('gh_redirect')
if (redirect) {
  sessionStorage.removeItem('gh_redirect')
  window.history.replaceState({}, '', redirect)
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
