
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Products from './components/Products';
import Error from './components/error';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import AddProduct from './components/AddProduct';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import AdminPage from './components/AdminPage'
import ManageProducts from './components/ManageProducts';
import ManageUsers from './components/ManageUsers';
import ManageOrders from './components/ManageOrders';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Homepage />} />
      <Route path='/products' element={<Products />} />
      <Route path='/addproduct' element={<AddProduct />} />
      <Route path='/error' element={<Error />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/cart' element={<Cart />} />
      <Route path='/admin' element={<AdminPage />} />
      <Route path='/manage_products' element={<ManageProducts />} />
      <Route path='/manage_users' element={<ManageUsers />} />
      <Route path='/manage_orders' element={<ManageOrders />} />
    </Routes>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
