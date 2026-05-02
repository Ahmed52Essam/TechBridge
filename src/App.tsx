import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/sections/Navbar';
import { Footer } from './components/sections/Footer';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import Home from './pages/Home';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background font-sans text-slate-900 antialiased selection:bg-secondary/20 selection:text-secondary">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
