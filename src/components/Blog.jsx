import React from 'react'
import blog1 from '../assets/B1.jpg'
import blog2 from '../assets/B2.jpg'
import blog3 from '../assets/B3.jpg'

export default function Blog() {
  const blogs = [
    {id:1,title:"Creating Streamlined Safeguarding Processes with OneRen",image:blog1},
    {id:2,title:"What are your safeguarding responsibilities and how can you manage them?",image:blog2},
    {id:3,title:"Revamping the Membership Model with Triathlon Australia",image:blog3},
  ]
  return (
    <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-12' id='testimonial' >
      <div className='text-center md:w-1/2 mx-auto'>
        <h2 className='text-4xl text-neutralDgrey font-semibold mb-4 hover:text-neutral-500'>Caring is the new marketing</h2>
        <p className='md:w-3/4 text-sm text-neutralgrey mb-8 md:w-3/5 mx-auto'>
          The Nextcent blog is the best place to read about the latest membership insights, trends and more. 
          See who's joining the community, read about how our community are increasing their membership income and lot's more.​
        </p>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
        {
          blogs.map(blog => <div key={blog.id} className='cursor-pointer hover:-translate-y-3 hover:scale-95 transition-all duration-300'>
            <img src={blog.image} alt="ff" />
            <div className='text-center z-10 -translate-y-[80px] bg-white rounded-lg w-[80%] mx-auto px-4 py-4 border shadow-md'> 
              <h3 className='text-xl font-semibold text-neutralDgrey'>{blog.title}</h3>
              <p className='text-xl leading-6 text-brandPrimary mt-5'>Readmore {'-->'}</p>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}
