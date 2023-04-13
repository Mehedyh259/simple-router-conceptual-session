import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Products from './Pages/Products/Products'
import NotFound from './Pages/NotFound/NotFound'
import ErrorPage from './Pages/ErrorPage/ErrorPage'
import ProductDetails from './Pages/ProductDetails/ProductDetails'
import Orders from './Pages/Orders/Orders'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:"/",
        element:<Home/>,
        loader: () =>  fetch("/foods.json")
      },
      {
        path:"about",
        element:<About/>
      },
      {
        path:"products",
        element:<Products/>
      },
      {
        path:"orders",
        element:<Orders/>
      },
      {
        path:"product/:foodId",
        element:<ProductDetails/>,

        loader: async ({params}) => {
          const res = await fetch("/foods.json");
          const foods = await res.json();

          const findFood = foods.find(food => food.id == params.foodId);
          return findFood;

        }
      },



      {
        path:"*",
        element:<NotFound/>
      }

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}>
   </RouterProvider>
  </React.StrictMode>,
)
