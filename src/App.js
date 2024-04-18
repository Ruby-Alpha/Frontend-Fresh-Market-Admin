import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import UserLogin from './Pages/userLogin';
import RegisterPage from './Pages/Registerpage';

const router = createBrowserRouter([
  {path: "/", element: <UserLogin/>},
  {path: "/register", element: <RegisterPage/>},

])


function App() {
  return (
    
      <>
      
      <RouterProvider router={router}/>
      
      </>
  
  );
}

export default App;
