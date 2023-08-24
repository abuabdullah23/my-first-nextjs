import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    const navLinks = [
        {
            path: '/',
            title: 'Home'
        },
        {
            path: '/about',
            title: 'About'
        },
        {
            path: '/profile',
            title: 'Profile'
        },
        {
            path: '/blogs',
            title: 'Blogs'
        },
        {
            path: '/dashboard',
            title: 'Dashboard'
        },
    ]
    return (
        <div className='container mx-auto flex justify-between items-center gap-4'>
            <h2 className='text-2xl font-semibold'>Next Hero</h2>
            <ul className='flex items-center justify-between gap-4 text-gray-500'>
                {
                    navLinks.map(({ path, title }) => <li key={path}>
                        <Link href={path}
                        className='hover:text-black hover:border-b-2 border-black transition duration-300'
                        >{title}</Link>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Navbar;