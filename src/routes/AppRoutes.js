import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from '../components/Footer'
import MainNavbar from '../components/Navbar'
import List from '../containers/List'
import Upload from '../containers/Upload'
import Home from '../containers/Home'


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <MainNavbar />
        <Routes>
            <Route path="/upload" element={<Upload />} />
            <Route path="/list" element={<List />} />
            <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes