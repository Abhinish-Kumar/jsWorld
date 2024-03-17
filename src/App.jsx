import './App.css'
import React from 'react'
import Home from './Home'
import User from './User'
import Dom from './Dom'
import { Route, Routes,Link} from "react-router-dom"
function App() {


  return (
    <>
    <header style={{textAlign:'center'}}><h1>Javascript Mastery</h1></header>
<nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/user">Books</Link>
          </li>
          <li>
            <Link to="/dom">Dom</Link>
          </li>
        </ul>
      </nav>
      <div id='box'>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/user" element={<User />} />
      <Route path="/dom" element={<Dom/>} />
    </Routes>
      </div>

      </>
  )
}

export default App
