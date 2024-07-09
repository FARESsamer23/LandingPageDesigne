import "./App.css";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Myfooter from "./components/Myfooter";
import Navbar from "./components/Navbar";
import NewsLetter from "./components/NewsLetter";
import Products from "./components/Products";
import Services from "./components/Services";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router basename={'/LandingPageDesigne'}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Services/>
   <About/>
   <Products/>
   <Blog/>
   <NewsLetter/>
   <Myfooter/>
      
    </div>
  );
}
