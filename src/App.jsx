import { useState } from 'react'
import './App.css'
import Header from './Header'
import AddData from './AddData'
import { BrowserRouter, Route,  Routes } from 'react-router'
import Home from './Home'
import ShowData from './ShowData'
import UpdateData from './UpdateData'

function App() {


  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/showdata' element={<ShowData/>} />
        <Route path='/add' element={<AddData/>} />
        <Route path='/eidt/:id' element={<UpdateData/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
