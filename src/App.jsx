import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu, {loader as menuLoader} from "./features/menu/Menu.jsx";
import Cart from "./features/cart/Cart.jsx";
import CreateOrder from "./features/order/CreateOrder";
import Order from "./features/order/Order";
import AppLayout from "./ui/AppLayout.jsx";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{
      path: "/",
      element: <Home />,
    },
    {
      path: "/menu",
      element: <Menu /> ,
      loader: menuLoader, 
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    { path: "/create/new", element: <CreateOrder /> },
    { path: "/order/:oderId", element: <Order />}]
  },
  
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
