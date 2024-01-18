import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Auth from './Component/Auth'
import AdminPage from './Component/Product'
import SuperAdminPage from './Component/SuperAdminPage'
import Works from './Component/Blog/Works'
import Header from './Component/Blog/Header'
import Footer from './Component/Blog/Footer'
import Products from './Component/Product'
import Blog from './Component/Blog/Blog'
import Work from './Component/Blog/Work'
import Contact from './Component/Blog/Contact'
export default function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Works />} />
        <Route path='work' element={<Work />} />
        <Route path='contact' element={<Contact />} />
        <Route path='blogs' element={<Blog />} />
        <Route path='header' element={<Header />} />
        <Route path='footer' element={<Footer />} />
        <Route path='auth' element={<Auth />} />
        <Route path='product' element={<Products />} />
        <Route path='admin' element={<AdminPage />} />
        <Route path='super_admin' element={<SuperAdminPage />} />
      </Routes>
    </div>
  )
}

