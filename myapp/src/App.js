import Dashboard from "./components/dashboard"
import Admin from "./Pages/Admin"
import Sidebar from "./components/sidebar"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./Pages/UserLogin"

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/admin' element={
        <div>
        <Admin />
        <Dashboard />
        <Sidebar />
        </div>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App