import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx'
import Main from './components/Main/Main.jsx';
import Regiester from './components/Regiester/Regiester.jsx';
import SignUp from './components/signup/SignUp.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/register',
        element:<Regiester></Regiester>
      },
      {
        path:'/login',
        element:<Login></Login>
      }
      ,
      {
        path:'/signup',
        element:<SignUp></SignUp>
      }
    ])
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
