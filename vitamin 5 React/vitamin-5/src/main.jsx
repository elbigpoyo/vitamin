import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import NotHome from './pages/NotHome.jsx'

const router = createBrowserRouter([
  {path: '/', element: <App/>},
  {path: '/home', element: <Home/>},
  {path: '/nothome', element: <NotHome/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
