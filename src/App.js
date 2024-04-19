import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLogin from './pages/userLogin';
import { ProductsAddPage } from "./pages/ProductsAddPage";
import { OrdersAddPage } from "./pages/OrdersAddPage";
import { DashboardOrderAddPage } from "./pages/DashboardOrderAddPage";
import { ProductsEditPage } from "./pages/ProductsEditPage";
import { OrdersEditPage } from "./pages/OrdersEditPage";
import { DashboardProductAddPage } from './pages/DashboardProductAddPage';
import Dashboard from "./pages/dashboard-sidebar";
import DashboardProducts from './pages/dashboard-products';
import DashboardOrders from './pages/dashboard-orders';
import DashboardUsers from './pages/dashboard-users';
import Registerpage from './pages/Registerpage';

const router = createBrowserRouter([
  {path: "/", element: <UserLogin/>},
  {path: "/register", element: <Registerpage/>},
  { path: "/product", element: <DashboardProductAddPage /> },
  { path: "/order", element: <DashboardOrderAddPage /> },
  { path: "/product/add", element: <ProductsAddPage /> },
  { path: "/product/:id/edit", element: <ProductsEditPage /> },
  { path: "/order/:id/edit", element: <OrdersEditPage /> },
  { path: "/order/add", element: <OrdersAddPage /> },
  {path: "/dashboard", element: <Dashboard />},
  {path: "/products", element: <DashboardProducts />},
  {path: "/orders", element: <DashboardOrders />},
  {path: "/users", element: <DashboardUsers />},

]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
