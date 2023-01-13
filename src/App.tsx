import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Pages/Main'
import Login from './Pages/Login'
import Navbar from './Components/NavBar/Navbar'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='*' element={<Main/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
