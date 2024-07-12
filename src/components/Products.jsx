import React, { useEffect, useRef, useState } from 'react';

export default function Products() {

  const containerRef = useRef(null);
  const imgRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);
  const [isContainerInView, setIsContainerInView] = useState(false);
  const [isImgInView, setIsImgInView] = useState(false);
  const [isTextInView, setIsTextInView] = useState(false);
  const [isStatsInView, setIsStatsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsContainerInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
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
    const imgObserver = new IntersectionObserver(
      ([entry]) => {
        setIsImgInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const textObserver = new IntersectionObserver(
      ([entry]) => {
        setIsTextInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    const statsObserver = new IntersectionObserver(
      ([entry]) => {
        setIsStatsInView(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (imgRef.current) {
      imgObserver.observe(imgRef.current);
    }

    if (textRef.current) {
      textObserver.observe(textRef.current);
    }

    if (statsRef.current) {
      statsObserver.observe(statsRef.current);
    }

    return () => {
      if (imgRef.current) {
        imgObserver.unobserve(imgRef.current);
      }
      if (textRef.current) {
        textObserver.unobserve(textRef.current);
      }
      if (statsRef.current) {
        statsObserver.unobserve(statsRef.current);
      }
    };
  }, []);

  return (
    <div id='product' ref={containerRef} className={`cont ${isContainerInView ? 'animate-container' : ''}`}>
      {/* About text */}
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto my-8'>
        <div className='md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-4'>
          <div className={`w-full md:w-1/2 img-container ${isImgInView ? 'animate-img' : ''}`} ref={imgRef}>
            <img src='./src/assets/Hand coding-rafiki.png' alt='' />
          </div>
          <div className={`md:w-3/5 mx-auto text-container ${isTextInView ? 'animate-text' : ''}`} ref={textRef}>
            <h2 className='text-4xl text-neutralDgrey font-semibold mb-4 md:w-4/5 hover:text-neutral-500'>How to design your site footer like we did</h2>
            <p className='md:w-3/4 text-sm text-neutralgrey mb-8'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. 
              In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. 
              Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
            </p>
            <button className='bg-brandPrimary py-3 px-4 rounded hover:bg-[#19c00a] hover:translate-x-2 hover:text-white transition-all shadow duration-300'>Learn More</button>
          </div>
        </div>
      </div>
      {/* Company stats */}
      <div className={`px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16 stats-container ${isStatsInView ? 'animate-stats' : ''}`} ref={statsRef}>
        <div className='flex flex-col md:flex-row flex-wrap items-center justify-around'>
          <div className='md:w-1/3 w-full'>
            <img src='./src/assets/image9.png' className='w-full' alt='' />
          </div>
          {/* Stats */}
          <div className='md:w-2/3 mx-auto'>
            <div>
              <p className='w-full text-sm text-neutralgrey mb-8 leading-6'>Maecenas dignissim justo eget nulla rutrum molestie. 
                Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare,
                tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie,
                nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget
                lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget.
                Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
              </p>
              <h3 className='text-xl font-semibold text-brandPrimary'>Tim Smith</h3>
              <p className='w-full text-sm text-neutral-400 my-5'>British Dragon Boat Racing Association</p>
              <div className='flex flex-wrap items-center justify-around my-12 gap-8'>
                <img src="./src/assets/Logo1.png" alt="img"/>
                <img src="./src/assets/Logo2.png" alt="img"/>
                <img src="./src/assets/Logo3.png" alt="img"/>
                <img src="./src/assets/Logo4.png" alt="img"/>
                <img src="./src/assets/Logo5.png" alt="img"/>
                <img src="./src/assets/Logo6.png" alt="img"/>
                <img src="./src/assets/Logo7.png" alt="img"/>
                <a href='/' className='text-brandPrimary font-semibold text-lg'>Meet all customers --{'>'}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
