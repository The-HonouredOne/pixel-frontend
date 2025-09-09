import { Navigate, Route, Routes, useLocation } from "react-router-dom"
import Home from "./components/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import AuthNavbar from "./components/AuthNavbar"


const App = () => {

  const location = useLocation()

  const hidepaths = ['/login', '/signup']

const ishidepage = hidepaths.includes(location.pathname) 


  return (
    <div>
      {!ishidepage && <Navbar />}

      <Routes>
        <Route path="/" element={<Navigate to="/jobs" replace />} />
        <Route path="/jobs" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
     
  {!ishidepage && <Footer />}
    </div>
  )
}

export default App
