import React from 'react'
import styles from '../styles'
import { twitter, logo } from '../assets'
import { footerLinks, socialMedia } from '../data'

const Footer = () => {
    return (
        <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div
                className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}
            >
                <div className='flex-1 flex flex-col justify-start mr-10'>
                    <img
                        src={logo}
                        alt='logo'
                        className='w-[266px] h-[72px] object-contain'
                    />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
                        A new way to make the payments easy, reliable and
                        secure.
                    </p>
                </div>
                <div className='w-full flex flex-[1.5] flex-row flex-wrap justify-between md:mt-0 mt-10'>
                    {footerLinks.map((footerLink, index) => (
                        <div
                            key={index}
                            className='flex flex-col ss:my-0 my-4 min-w-[150px]'
                        >
                            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                                {footerLink.title}
                            </h4>
                            <ul className='list-none mt-4 flex flex-col gap-[12px]'>
                                {footerLink.links.map((link) => (
                                    <li
                                        key={link.name}
                                        className='cursor-pointer font-popins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary'
                                    >
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
                <p className='font-popins font-normal text-center text-[18px] leading-[27px] text-white'>
                    2021 HooBank. All Rights Reserved.
                </p>
                <div className='flex flex-row md:mt-0 mt-6 gap-[30px]'>
                    {socialMedia.map((social) => (
                        <img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className='w-[21px] h-[21px] object-contain cursor-pointer'
                        />
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer
