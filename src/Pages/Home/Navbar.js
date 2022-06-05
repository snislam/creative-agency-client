import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import logo from '../../images/logos/logo.png'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <div className='flex flex-row justify-between items-center h-[80px] container mx-auto px-12'>
                <div>
                    <Link className='text-3xl font-bold text-primary' to='/'>
                        <img className='w-[150px] h-[47px]' src={logo} alt="creative agency " />
                    </Link>
                </div>
                <div>
                    <button className='block md:hidden' onClick={() => setIsOpen(!isOpen)}> {!isOpen ? <MenuIcon className='w-8 h-8' /> : <XIcon className='w-8 h-8' />} </button>
                    <menu className={isOpen ? 'absolute md:static md:mt-0 left-0 top-[80px] w-full px-8 py-3 duration-700 md:duration-0 bg-[#FBD062] md:bg-transparent' : 'absolute md:static mt-[-580px] md:mt-0 left-0 top-[80px] w-full px-8 py-3 duration-700 md:duration-0 bg-[#FBD062] md:bg-transparent'}>
                        <ul className='block md:flex md:flex-row justify-center items-center'>
                            <li className='my-2 py-2 bg-[#fcc332] md:bg-transparent hover:bg-[#f9bb1e]'><Link className='px-4 py-2 focus:bg-[#111430] focus:text-white duration-300 rounded-sm' to='/'>Home</Link></li>
                            <li className='my-2 py-2 bg-[#f9c43d] md:bg-transparent hover:bg-[#f9bb1e]'><Link className='px-4 py-2 focus:bg-[#111430] focus:text-white duration-300 rounded-sm' to='#portfolio'>Our Portfolio</Link></li>
                            <li className='my-2 py-2 bg-[#f9c43d] md:bg-transparent hover:bg-[#f9bb1e]'><Link className='px-4 py-2 focus:bg-[#111430] focus:text-white duration-300 rounded-sm' to='#our-team'>Our Team</Link></li>
                            <li className='my-2 py-2 bg-[#f9c43d] md:bg-transparent hover:bg-[#f9bb1e]'><Link className='px-4 py-2 focus:bg-[#111430] focus:text-white duration-300 rounded-sm' to='#contact-us'>Contact Us</Link></li>
                            <li className='my-2 py-2'><button><Link className='bg-[#111430] text-slate-100 py-2 md:ml-3 px-4 border-0 rounded-sm' to='/login'>Login</Link></button></li>
                        </ul>
                    </menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;