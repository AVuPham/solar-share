import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import './index.css'

// ✅ Xử lý redirect từ 404.html (fix lỗi 404 khi refresh)
const redirect = sessionStorage.getItem("redirect")
if (redirect) {
  sessionStorage.removeItem("redirect")
  window.history.replaceState({}, "", redirect)
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
