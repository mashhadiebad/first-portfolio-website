import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';

const Home = () => {
  return (
    <div name = 'home' className='w-full h-screen  bg-[#0a192f]'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 py-[100px] flex flex-col justify-center'>
          <p className='text-[#e83d3d]'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Mohammad Hossein Mashhadi Ebad</h1>
          <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'am a Junior Full Stack Developer</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>
          Enthusiastic ، focused and motivated Junior Frontend Developer with the ability to learn and collaborate in rapidly changing environments and composition. Worked through 100+ hours of boot camp structure learning JavaScript, Sass, Typescript, Next.js, Redux, SQL, Linux, and React. Eager to tackle web development challenges to utilize my skills and maximizes my potential.
          </p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#e83d3d] hover:border-[#e83d3d]'>
              View Work
               <span className='group-hover:rotate-90 duration-300' >
                <HiArrowNarrowRight className='ml-3' /> 
                </span>
               </button>

          </div>
        </div>
    </div>
  )
}

export default Home