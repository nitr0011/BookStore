import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Navbar from './components/Nav/Navbar'
import Home from './components/Home'
import Books from './components/Books'
import Aboutus from './components/Aboutus'
import Login from './components/login/login'
import Signup from './components/login/signup'


function App() {
  return (
   <Router>
      <div className='App'>
        <Navbar/> 
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Books' element={<Books/>}/>
        <Route path='/Aboutus' element={<Aboutus/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/> 
        </Routes>
      </div>
   </Router> 
  )
 
};
export default App

