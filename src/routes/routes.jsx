import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Menu from "../pages/Menu";
import Shop from "../pages/Shop";





export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'ourmenu',
        element: <Menu></Menu>
      },
      {
        path: '/ourshop/:category',
        element:<Shop></Shop>
      },
    ],



 
    
  }
]);