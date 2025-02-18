import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './Pages/login.jsx'
import RegisterPage from './Pages/register.jsx'
import ErrorPage from './Pages/404.jsx'
import ProductPage from './Pages/products';
import './index.css'
import ProfilePage from './Pages/profile.jsx'
import DetailProductPage from './Pages/detailProduct.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import HomePage from './Pages/home.jsx'



const router = createBrowserRouter([
  {
    path: "/", element: <HomePage />,
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
  {
    path: "/profile", element: <ProfilePage />
  },
  {
    path: `/products/:id`, element: <DetailProductPage />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider
        router={router}
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      />
    </Provider>
  </StrictMode>,
)
