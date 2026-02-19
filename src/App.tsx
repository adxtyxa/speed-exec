import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/speed/Navbar'
import { SpeedFooter } from './components/speed/Footer'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Services from './pages/Services'
import ShootLab from './pages/ShootLab'
import Booking from './pages/Booking'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main className="relative">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/services" element={<Services />} />
            <Route path="/shoot-lab" element={<ShootLab />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <SpeedFooter />
      </div>
    </BrowserRouter>
  )
}
