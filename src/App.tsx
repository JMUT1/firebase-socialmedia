import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './Pages/Main/Main'
import Login from './Pages/Login/Login'
import Navbar from './Components/NavBar/Navbar'
import CreatePost from './Pages/Create-post/CreatePost'


function App() {

  return (
    <div className="">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createpost' element={<CreatePost/>}/>

          <Route path='*' element={<Main/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  )
}

export default App
