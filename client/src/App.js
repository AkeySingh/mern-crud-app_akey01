import './App.css'
import NavbarComponent from './components/NavbarComponent'
import HomeComponent from './components/HomeComponent'
import UserFormComponent from './components/UserFormComponent'
import { Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <div className='App'>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/add/user' element={<UserFormComponent />} />
      </Routes>
    </div>
  )
}

export default App
