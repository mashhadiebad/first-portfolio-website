import React from 'react'
import css from '../assets/css.png';
import html from '../assets/html.png'
import javascript from '../assets/javascript.png';
import typescript from '../assets/typescript.png';
import react from '../assets/react.png';
import sass from '../assets/sass.png';
import sql from '../assets/sql.png';
import redux from '../assets/redux.png';
import next from '../assets/next.svg';
import node from '../assets/node.png';
import github from '../assets/github.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-full bg-[#0a192f] text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#e83d3d] '>Skills</p>
                <p className='py-4'> These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={html} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={css} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={javascript} alt="JavaScript icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={sass} alt="Sass icon" />
                    <p className='my-4'>Sass</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={typescript} alt="Typescript icon" />
                    <p className='my-4'>TypeScript</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={react} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={node} alt="node icon" />
                    <p className='my-4'>Node.js</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={sql} alt="SQL icon" />
                    <p className='my-4'>SQL</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={redux} alt="Redux icon" />
                    <p className='my-4'>Redux</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={next} alt="Next.js icon" />
                    <p className='my-4'>Next.js</p>
                </div>
                <div className='flex flex-col item-center justify-center shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-2' src={github} alt="Github icon" />
                    <p className='my-4'>Github</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills