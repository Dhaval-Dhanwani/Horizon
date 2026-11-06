import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import { Intro } from '../Components/Intro/intro.jsx'
import { Home } from '../Components/Home/Home.jsx'
import { AboutUs } from '../Components/Home/AboutUs/AboutUs.jsx'
import { SignUp } from '../Components/Home/SignUp/SignUp.jsx'
import { Login } from '../Components/Home/Login/Login.jsx'

let router=createBrowserRouter
(
  createRoutesFromElements
  (
    <>
    <Route path="/" element={<Intro/>}>
      
    </Route>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/AboutUs" element={<AboutUs/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/Login" element={<Login/>}></Route>
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
