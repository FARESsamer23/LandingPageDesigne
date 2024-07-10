import "./App.css"
import About from "./components/About"
import Blog from "./components/Blog"
import Home from "./components/Home"
import Myfooter from "./components/Myfooter"
import Navbar from "./components/Navbar"
import NewsLetter from "./components/NewsLetter"
import Products from "./components/Products"
import Services from "./components/Services"


export default function App() {
  return (
    <div className="App">
    <Navbar/>
   <Home/>
   <Services/>
   <About/>
   <Products/>
   <Blog/>
   <NewsLetter/>
   <Myfooter/>
    </div>
  )
}