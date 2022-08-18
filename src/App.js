
import './App.css';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portrait from './Pages/ServicePages/Portrait';
import Wedding from './Pages/ServicePages/Wedding';
import Product from './Pages/ServicePages/Product';
import Event from './Pages/ServicePages/Event';
import Privacy from './Pages/FooterPages/Privacy';
import Aboutus from './Pages/FooterPages/Aboutus';
import Terms from './Pages/FooterPages/Terms';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/wedding" element={<Wedding />} />
          <Route path="/portrait" element={<Portrait />} />
          <Route path="/product" element={<Product />} />
          <Route path="/event" element={<Event />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/aboutus' element={<Aboutus />} />
          <Route path='/terms' element={<Terms />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
