import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import NewsLetter from './components/NewsLetter';
import Myfooter from './components/Myfooter';
import './App.css';

function App() {
  return (
    <Router basename="/LandingPageDesigne">
      <div className="App">
        <Navbar />
        <Home />
        <Services />
        <About />
        <Products />
        <Blog />
        <NewsLetter />
        <Myfooter />
      </div>
    </Router>
  );
}

export default App;
