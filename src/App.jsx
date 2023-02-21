import { Route, Routes } from 'react-router-dom'

//navbar component
import Navbar from './components/Navbar'

//page routes
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Works from './pages/Works'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  )
}
