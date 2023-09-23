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
    <nav>
        <div className='md:hidden  bg-blue-500 ' onClick={()=>setOpen(!open)}>
            {
                !open?<AiOutlineMenu className='text-2xl'/> :<AiOutlineClose className='text-2xl'/>
            }
            
        </div>
        
      <ul className={`${open? "top-6":"-top-60"} md:flex w-full justify-center bg-blue-300 shadow-lg absolute md:static px-10`}>
        {
            routes.map(route=><Link className="text-center" key={route.Id} route={route}></Link>)
        }
      </ul>
    </nav>
  )
}

export default Navbar
