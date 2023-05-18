import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import logo from '../assets/logo.png';
import { HiOutlineMail } from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import {Link} from 'react-scroll';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed z-50 w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <img src={logo} alt="logo" style={{ width:'100px' }}  />
        </div>

         <ul className='hidden md:flex'>
            <li>
                <Link to="home"  smooth={true}  duration={500} >
          Home
        </Link></li>
            <li><Link to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
            <li><Link to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
            <li><Link to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
            <li><Link to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
        </ul>
    

        {/* fabars icon */}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* mobile navbar */}
        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]'}>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="home"  smooth={true}  duration={500} >
          Home
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="about"  smooth={true}  duration={500} >
          About
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="skills"  smooth={true}  duration={500} >
          Skills
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="work"  smooth={true}  duration={500} >
          Work
        </Link></li>
            <li className='py-6 text-4xl'><Link onClick={handleClick} to="contact"  smooth={true}  duration={500} >
          Contact
        </Link></li>
        </ul>

        {/* social icon */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                    <a href="https://www.linkedin.com/in/mohammad-hossein-mashhadi-ebad" className='flex justify-between w-full items-center text-gray-300'>
                        Linkedin <FaLinkedin size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a href="https://github.com/mashhadiebad" className='flex justify-between w-full items-center text-gray-300'>
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                    <a href="mh.mashhadiebad@gmail.com" className='flex justify-between w-full items-center text-gray-300'>
                        Mail <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a href="/" className='flex justify-between w-full items-center text-gray-300'>
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>

            </ul>

        </div>
        


    </div>
  )
}

export default Navbar