import React, { useEffect, useRef, useState } from 'react';
 import  s3 from '../assets/vector3.png'
 import  s2 from '../assets/vector2.png'
 import  s1 from '../assets/vector1.png'
   import logo1 from "../assets/Logo1.png"
      import logo2 from "../assets/Logo2.png"
         import logo3 from "../assets/Logo3.png"
            import logo4 from "../assets/Logo4.png"
               import logo5 from "../assets/Logo5.png"
                  import logo6 from "../assets/Logo6.png"
                     import logo7 from "../assets/Logo7.png"

export default function Services() {

  const services = [
    {id:1,title:'Membership Organisations',description:'Our membership management software provides full automation of membership renewals and payments',image:s3},
    {id:2,title:'National Associations',description:'Our membership management software provides full automation of membership renewals and payments',image:s2},
    {id:3,title:'Clubs And Groups',description:'Our membership management software provides full automation of membership renewals and payments',image:s1}
  ];

  const containerRef = useRef(null);
  const cardRefs = useRef([]);
  const [isContainerInView, setIsContainerInView] = useState(false);
  const [cardsInView, setCardsInView] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContainerInView(entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCardsInView((prev) => [...prev, entry.target]);
          }
        });
      },
      {
        threshold: 0,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) {
        cardObserver.observe(card);
      }
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) {
          cardObserver.unobserve(card);
        }
      });
    };
  }, []);

  return (
    <div
      id='services'
      
      className={`md:px-14 px-4 py-16 max-w-screen-2xl mx-auto`}
    >
      <div ref={containerRef}
      className={` text-center my-8 my-animated-component ${isContainerInView ? 'animate-container' : ''} md:px-14 px-4 py-16 max-w-screen-2xl mx-auto`}
      >
        <h2 className='text-4xl text-neutralDgrey font-semibold mb-2'>Our Clients</h2>
        <p className='text-neutralgrey'>We have been working with some Fortune 500+ clients</p>
        <div className='flex flex-wrap items-center justify-around my-12 gap-8 '>
          <img src={logo1} alt="img"/>
          <img src={logo2} alt="img"/>
          <img src={logo3} alt="img"/>
          <img src={logo4} alt="img"/>
          <img src={logo5} alt="img"/>
          <img src={logo6} alt="img"/>
          <img src={logo7} alt="img"/>
         
        </div>
      </div>

      <div className='text-center mt-20 md:w-1/2 mx-auto '>
        <h2 className='font-semibold text-4xl text-neutralgrey mb-3'>Manage your entire community in a single system</h2>
        <p className='text-neutralgrey'>Who is Nextcent suitable for?</p>
      </div>

      <div className='mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12'>
        {services.map((service, index) => (
          <div key={service.id}>
            <div
              ref={(el) => (cardRefs.current[index] = el)}
              className={`card ${cardsInView.includes(cardRefs.current[index]) ? 'animate-card' : ''} flex flex-col justify-center items-center px-4 py-8 text-center mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 md:w-[300px] hover:border-indigo-700 transition-all duration-300`}
            >
              <div className='bg-[#bfeac3] h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl'>
                <img className='w-full' src={service.image} alt="image"/>
              </div>
              <h4 className='font-semibold text-2xl text-neutralDgrey mb-2 px-2'>{service.title}</h4>
              <p className='text-sm text-neutralgrey'>{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
