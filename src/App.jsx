import HomePage from './components/HomePage'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default App
