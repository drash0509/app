import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from '../pages/login'
import AddProduct from '../pages/addproduct'
import ShowProduct from '../pages/showproduct'
import Account from '../pages/account'
import Register from '../components/register'
import LoginForm from '../components/login'
function MainRoute() {
    
  return (
    
      <Routes>
              <Route path="/" element={<Login/>} />

      
        <Route path="/login" element={<Login/>} />
        <Route path="/add-product" element={<AddProduct/>} />
        <Route path="/show-product" element={<ShowProduct/>} />
        <Route path="/account" element={<Account />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/loginform" element={<LoginForm/>} />
      </Routes>
 
  )
}

export default MainRoute;
