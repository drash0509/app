import React from 'react'
import Navbar from './components/navbar'
import MainRoute from './routes/router'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <>
 <Router>
 <Navbar/>
 <MainRoute/>
 </Router>
    </>
  )
}

export default App;