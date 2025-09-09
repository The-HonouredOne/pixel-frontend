import { Navigate, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./pages/About"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Contact from "./pages/Contact"


const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/jobs" replace />} />
        <Route path="/jobs" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App
