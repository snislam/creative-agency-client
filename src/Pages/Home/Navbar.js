import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/solid'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className='bg-slate-400'>
            <div className='flex flex-row justify-between items-center h-[80px] container mx-auto px-12'>
                <div className='z-50'>
                    <Link className='text-3xl font-bold text-primary' to='/'>Logo</Link>
                </div>
                <div>
                    <button className='block md:hidden' onClick={() => setIsOpen(!isOpen)}> {!isOpen ? <MenuIcon className='w-8 h-8' /> : <XIcon className='w-8 h-8' />} </button>
                    <menu className={isOpen ? 'absolute md:static md:mt-0 left-0 top-[80px] w-full px-8 duration-700 bg-slate-400 z-10' : 'absolute md:static mt-[-280px] md:mt-0 left-0 top-[80px] w-full px-8 duration-700 bg-slate-400 z-10'}>
                        <ul className='block md:flex md:flex-row justify-center'>
                            <li><Link className='px-4' to='/'>Home</Link></li>
                            <li><Link className='px-4' to='#portfolio'>Our Portfolio</Link></li>
                            <li><Link className='px-4' to='#our-team'>Our Team</Link></li>
                            <li><Link className='px-4' to='#contact-us'>Contact Us</Link></li>
                            <li><button className='btn bg-[#111430] text-slate-100 py-1 px-5 rounded-sm'>Login</button></li>
                        </ul>
                    </menu>
                </div>
            </div>
        </div>
    );
};

export default Navbar;