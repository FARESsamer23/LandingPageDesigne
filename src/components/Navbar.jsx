import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import logo  from '../assets/Icon.png'
import {FaXmark,FaBars} from "react-icons/fa6";
export default function Navbar() {
    const [isMenuOpen,setIsmenuOpen] = useState(false)
    const [isSticky,setIsSticky] = useState(false)

     // set toggle menu 
     const toggleMenu = () => {
        setIsmenuOpen(!isMenuOpen)
        }


    useEffect(()=>{

        const handelScroll = ()=>{
             if(window.scrollY > 100){
                setIsSticky(true)
             }else{
                setIsSticky(false)
             }
        };
        window.addEventListener('scroll',handelScroll)
        return ()=>{
            window.addEventListener('scroll',handelScroll)
            }
    });

      // navItems array
      const navItems = [
        {link:"Home",path:'#home'},
        {link:"Service",path:'#services'},
        {link:"About",path:'#about'},
        {link:"Product",path:'#product'},
        {link:"Testimonial",path:'#testimonial'},
        {link:"FAQ",path:'#faq'},        
      ]

  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
      <nav className={`py-4 lg:px-14 px-4 ${isSticky?'sticky top-0 left-0 right-0 border bg-white duration-300':''}`}>
          <div className='flex items-center justify-between text-base gap-8'>
          <a href=''
          className='text-2xl font-semibold flex items-center space-x-3'
          >
          <img src={logo} alt='logo' className='w-10  inline-block items-center '/>
           <span className=' text-[#263238]'>NEXCENT</span></a>
        
        
            <ul className='md:flex space-x-12 hidden'>
                {navItems.map(({link, path}) =><li  key={path} spy="true" smooth="true" 
                offset={-100} className="block text-base text-gray-900 hover:text-brandPrimary
                first:font-medium "> <a href={path}>{link}</a></li> )} 
            </ul>

            {/* btn for large devices */}
            
          <div className=' space-x-12 hidden  lg:flex items-center '>
            <a href='/' className=' hidden lg:flex items-center text-brandPrimary
            hover:text-gray-900 hover:bg-neutral-400 hover:rounded-md transition-all duration-300 py-1 px-1'>Login</a>
            <button className='bg-brandPrimary text-white px-3 py-1 rounded
            transition-all duration-300 hover:bg-neutralDgrey hover:rounded-xl'>Sign Up</button>
          </div>
           {/*menu btn for only mobile devices */}
           <div className='md:hidden'>
           <button onClick={toggleMenu} className=' text-neutralDgrey focus:outline-none focus:text-gray-500'>
           {
            isMenuOpen?(<FaXmark className='h-7 w-7 text-neutralDgrey'/>):(<FaBars/>)
           }
           </button>
           </div>
           </div>
           {/* items for mobile devices */}
           <div className={`space-y-4 px-4 md:hidden mt-16 py-7 bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 left-0 right-0  ":"hidden"}`}>
           {navItems.map(({link, path}) =><li  key={path} spy="true" smooth="true" 
           offset={-100} className="block text-base text-white hover:text-gray-900
           first:font-medium "> <a href={path}>{link}</a></li> )} 
           </div>
      </nav>

    </header>
  )
}

