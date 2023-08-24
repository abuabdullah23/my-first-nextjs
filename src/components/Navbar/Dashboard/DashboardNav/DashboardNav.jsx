import Link from 'next/link';
import React from 'react';

const DashboardNav = () => {
    const navLinks = [
        {
            path: '/dashboard',
            title: 'Dashboard'
        },
        {
            path: '/dashboard/add-product',
            title: 'Add Products'
        },
        {
            path: '/dashboard/manage-products',
            title: 'Manage Products'
        },
        {
            path: '/',
            title: 'Home'
        }

    ]

    return (
        <div>
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
            <div>
                {
                    navLinks.map(({ path, title }) => (
                        <li key={path}
                        className='my-3 list-none text-gray-500'
                        >
                            <Link href={path}
                                className='hover:text-black hover:border-b-2 border-black transition duration-300'
                            >{title}</Link>
                        </li>
                    ))
                }
            </div>
        </div>
    );
};

export default DashboardNav;