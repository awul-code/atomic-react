import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'
import ProductPage from './Pages/products';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/", element: <div>Hello world</div>,
    errorElement: <ErrorPage />
  },
  {
    path: "/login", element: <LoginPage />
  },
  {
    path: "/register", element: <RegisterPage />
  },
  {
    path: "/products", element: <ProductPage />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider
      router={router}
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    />

  </StrictMode>,
)
