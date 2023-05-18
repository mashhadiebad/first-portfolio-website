import React from 'react'

const About = () => {
  return (
    <div  name='about' className='w-full h-screen flex items-center bg-[#0a192f] text-gray-300 '>
        <div className='mx-auto flex flex-col justify-center items-center'>
            <div className='max-w-[1000px] grid grid-cols-2 gap-8'>
                <div className='ms:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#e83d3d]'>
                        About
                    </p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Mohammad Hossein,nice to meet you. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                            I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating softwarefor
                            clients ranging from individuals and small-businesses all the 
                             way to large enterprise corporations. what would you do if you had 
                            a software expert available at your fingertips? 
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About