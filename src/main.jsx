import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import Bootstrap CSS + JS（漢堡選單、collapse 等需 Bootstrap 支援）
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 

// import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'

import routes from '../routes/index.jsx'
const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
)
