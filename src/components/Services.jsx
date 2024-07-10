import React from 'react'

export default function Services() {

  const services = [
    {id:1,title:'Membership Organisations',description:'Our membership management software provides full automation of membership renewals and payments',image:"/src/assets/vector3.png"},
    {id:2,title:'National Associations',description:'Our membership management software provides full automation of membership renewals and payments',image:"/src/assets/vector2.png"},
    {id:3,title:'Clubs And Groups',description:'Our membership management software provides full automation of membership renewals and payments',image:"/src/assets/vector1.png"}

  ]
  return (
    <div className='md:px-14 px-4 py-16 max-w-screen-2xl mx-auto' id='services'>
    <div className='text-center my-8'>
       <h2 className='text-4xl text-neutralDgrey font-semibold mb-2'> Our Clinets</h2>
       <p className='text-neutralgrey'>We have been working with some Fortune 500+ clients</p>
       {/** company logo */}
          <div className=' flex flex-wrap items-center justify-around my-12 gap-8 '>
              <img src="/src/assets/Logo1.png" alt="img"/>
              <img src="/src/assets/Logo2.png" alt="img"/>
              <img src="/src/assets/Logo3.png" alt="img"/>
              <img src="/src/assets/Logo4.png" alt="img"/>
              <img src="/src/assets/Logo5.png" alt="img"/>
              <img src="/src/assets/Logo6.png" alt="img"/>
              <img src="/src/assets/Logo7.png" alt="img"/>
          </div>  
       </div>

       {/** services card */}
       <div className='text-center mt-20 md:w-1/2 mx-auto ' >
       <h2 className=' font-semibold text-4xl text-neutralgrey mb-3' >Manage your entire community in a single system </h2>
       <p className='text-neutralgrey'>Who is Nextcent suitable for?
       </p>
       </div>
       {/**cards */}
       <div className='  mt-14 grid  lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
       {
        services.map((service)=> <div key={service.id}>
          <div className='flex flex-col justify-center items-center px-4 py-8 text-center 
          mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4
          md:w-[300px] hover:border-indigo-700 transition-all duration-300 '>
          <div className=' bg-[#bfeac3] h-14 w-14 mx-auto rounded-tl-3xl  rounded-br-3xl'><img className='w-full' src={service.image} alt="image"/></div>
          <h4 className='font-semibold text-2xl text-neutralDgrey mb-2 px-2'>{service.title}</h4>
          <p className='text-sm text-neutralgrey '>{service.description}</p>
          </div>
        </div>)
       }
       </div>
       </div>
  )
}
