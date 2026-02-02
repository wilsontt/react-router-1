import Layout from "../pages/Layout"; 
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import ProductList from "../pages/ProductList";
import Cart from "../pages/Cart";
import Orders from "../pages/Orders";

const routes =[
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path:"/ProductList",
        element: <ProductList />,
      },
      {
        path:"/Cart",
        element: <Cart />,
      },
      {
        path:"/Orders",
        element: <Orders />,
      }
    ]
  },
  {
    path: "*",
    element: <NotFound />,
  }
]

export default routes;