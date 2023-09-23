import React, { useState } from 'react';
import Link from './Link';
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai";

const Navbar = () => {
    const [open,setOpen] =useState(false);

    const routes = [
        { Id: 1, path: '/home', name: 'Home' },
        { Id: 2, path: '/about', name: 'About' },
        { Id: 3, path: '/services', name: 'Services' },
        { Id: 4, path: '/contact', name: 'Contact' },
        { Id: 5, path: '*', name: 'Not Found' }
      ];



  return (
    <nav className='md:mx-10'>
        <div className='md:hidden p-4 bg-blue-500 ' onClick={()=>setOpen(!open)}>
            {
                !open?<AiOutlineMenu className='text-2xl'/> :<AiOutlineClose className='text-2xl'/>
            }
            
        </div>
        
      <ul className={`${open? "top-14":"-top-72"} py-3 md:flex w-full rounded-lg text-white font-semibold text-xl justify-center bg-blue-600 shadow-lg absolute md:static px-10`}>
        {
            routes.map(route=><Link className="text-center" key={route.Id} route={route}></Link>)
        }
      </ul>
    </nav>
  )
}

export default Navbar
