import React from 'react'

export default function About() {
  return (
    <div id='about'>
      {/*about text*/}
         <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8 '>
           <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-4 '>
                <div className='w-full md:w-1/2'>
                     <img src='/src/assets/AboutAs.png' alt=''/>
                </div>
                <div className='md:w-3/5 mx-auto'>
                <h2 className='text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5  hover:text-neutral-500'>The unseen of spending three years at Pixelgrade</h2>
                <p className='md:w-3/4 text-sm text-neutralgrey mb-8 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                 Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. 
                 Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button className='bg-brandPrimary py-3 px-4 rounded hover:bg-[#19c00a] hover:translate-x-2 hover:text-white transition-all shadow duration-300 '>Learn More</button>
                </div>
           </div>
         </div>
         {/* company stats*/}
         <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 '>
              <div className='flex flex-col md:flex-row flex-wrap items-center justify-center' >
                   <div className='md:w-1/2'>
                          <h2 className='text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5  hover:text-neutral-500'>Helping a local<span className='text-brandPrimary block'> business reinvent itself</span></h2>
                          <p className='md:w-3/4 text-sm text-neutralgrey mb-8 '>
                            We reached here with our hard work and dedication
                          </p>
                   </div>

                   {/**stats */}

                   <div className='md:w-1/2 mx-auto grid  grid-cols-1 md:grid-cols-2 gap-12'>

                     

                      <div className='  flex items-center  gap-12  '>
                      <img src='./src/assets/ppl.png' alt='oo' className='w-[60px] h-[60px] bg-[#0dc0306a] rounded-tl-2xl rounded-br-2xl mb-4 text-brandPrimary'/>
                      <div className=' flex flex-col items-center justify-center gap-1  '>
                      <h3 className='text-2xl text-neutralDgrey font-semibold  '>2,245,341</h3>
                      <p className='md:w-3/4 text-sm text-neutralgrey mb-8 '>Members</p>
                      </div>
                      </div>
                      
                      <div className='  flex items-center  gap-12  '>
                      <img src='./src/assets/2hands.png' alt='oo' className='w-[60px] h-[60px] bg-[#0dc0306a] rounded-tl-2xl rounded-br-2xl mb-4'/>
                      <div className=' flex flex-col items-center justify-center gap-1  '>
                      <h3 className='text-2xl text-neutralDgrey font-semibold  '>46,328</h3>
                      <p className='md:w-3/4 text-sm text-neutralgrey mb-8 '>Clubs</p>
                      </div>
                      </div>

                      
                      <div className='  flex items-center  gap-12  '>
                      <img src='./src/assets/tap.png' alt='oo' className='w-[60px] h-[60px] bg-[#0dc0306a] rounded-tl-2xl rounded-br-2xl mb-4 '/>
                      <div className=' flex flex-col items-center justify-center gap-1  '>
                      <h3 className='text-2xl text-neutralDgrey font-semibold  '>828,867</h3>
                      <p className='md:w-3/4 text-sm text-neutralgrey mb-8 '>Event Bookings</p>
                      </div>
                      </div>

                      
                      <div className='  flex items-center  gap-12  '>
                      <img src='./src/assets/payment.png' alt='oo' className='w-[60px] h-[60px] bg-[#0dc0306a] rounded-tl-2xl rounded-br-2xl mb-4 '/>
                      <div className=' flex flex-col items-center justify-center gap-1  '>
                      <h3 className='text-2xl text-neutralDgrey font-semibold  '>1,926,436</h3>
                      <p className='md:w-3/4 text-sm text-neutralgrey mb-8 '>Payments</p>
                      </div>
                      </div>

                  </div>
              </div>
         </div>
    </div>
  )
}
