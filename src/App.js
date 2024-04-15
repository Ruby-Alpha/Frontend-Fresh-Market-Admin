import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { DashboardProductAddPage } from './pages/DashboardProductAddPage';
import { ProductsAddPage } from './pages/ProductsAddPage';
import { OrdersAddPage } from './pages/OrdersAddPage';
import { DashboardOrderAddPage } from './pages/DashboardOrderAddPage';
import { ProductsEditPage } from './pages/ProductsEditPage';
import { OrdersEditPage } from './pages/OrdersEditPage';

const router = createBrowserRouter([
  {path: "/", element: <DashboardProductAddPage/>},
  {path: "/order", element: <DashboardOrderAddPage/>},
  {path: "/product/add", element: <ProductsAddPage/>},
  {path: "/product/edit", element: <ProductsEditPage/>},
  {path: "/order/edit", element: <OrdersEditPage/>},
  {path: "/order/add", element: <OrdersAddPage/>},

])



function App() {
  return (
    
      <>
      
      <RouterProvider router={router}/>
      
      </>
  
  );
}

export default App;
