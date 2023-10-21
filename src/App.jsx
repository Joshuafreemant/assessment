import { useState } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Dashboard from './pages/Dashboard/Dashboard'

import Edit from './pages/Edit/Edit'
import Conditions from './pages/Conditions/Conditions'

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="edit" element={<Edit />} />
          <Route path="set-condition" element={<Conditions />} />
        </Routes>
      </Router>


    </>
  )
}

export default App
