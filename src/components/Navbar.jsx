import React, { useState } from 'react'
import { logo, close, menu } from '../assets'
import { navLinks } from './../data/index'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={logo} alt='logo' className='w-[124px] h-[32px]' />
            <ul className='list-none sm:flex hidden justify-end items-center gap-10 flex-1'>
                {navLinks.map((link) => (
                    <li
                        key={link.id}
                        className={`font-popins font-normal cursor-pointer text-[16px] text-white`}
                    >
                        <a href={`#${link.id}`}>{link.title}</a>
                    </li>
                ))}
            </ul>
            <div className='sm:hidden flex:1 justify-end items-center'>
                <img
                    src={toggle ? close : menu}
                    alt='menu-burger'
                    className='w-[28px] h-[28px] object-contain'
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div
                    className={`${
                        toggle ? 'flex' : 'hidden'
                    } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
                >
                    <ul className='list-none flex flex-col justify-end items-center gap-5 flex-1'>
                        {navLinks.map((link) => (
                            <li
                                key={link.id}
                                className={`font-popins font-normal cursor-pointer text-[16px] text-white`}
                            >
                                <a href={`#${link.id}`}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
