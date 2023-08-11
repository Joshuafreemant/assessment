import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Header from './components/Header/Header'
import SideBar from './components/SideBar/Sidebar'
import Dashboard from './pages/Dashboard/Dashboard'
import Customer from './pages/Customer/Customer'
import CustomerProfile from './pages/CustomerProfile/CustomerProfile'

function App() {

  return (
    <>

      <Router>
        <Header />
        <SideBar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="customer-profile" element={<CustomerProfile />} />
        </Routes>
      </Router>


    </>
  )
}

export default App
