import { BrowserRouter, Routes, Route } from 'react-router-dom'

import PrivateRoutes from './components/PrivateRoutes'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import Users from './pages/Users'
import AddCar from './components/AddCar'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>JWT Auth App</h1>
        <BrowserRouter>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path='/users' element={<Users />} />
              <Route path='/add-car' element={<AddCar />} />
            </Route>
            <Route path='/' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='*' element={<h2> Page not found, good try 😎</h2>} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  )
}

export default App
