import Link from 'next/link';
import React from 'react';
import NavLink from '../../ActiveLink/NavLink';

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
            path: '/dashboard/all-products',
            title: 'All Products'
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
        <div className='w-1/6'>
            <h1 className='text-3xl font-semibold'>Dashboard</h1>
            <div>
                {
                    navLinks.map(({ path, title }) => (
                        <li key={path}
                            className='my-3 list-none text-gray-500'
                        >
                            <NavLink href={path}
                                exact
                                activeClassName='bg-blue-600 text-white py-2 px-4 w-full'
                                className='hover:text-gray-200 hover:bg-blue-600 transition duration-300 py-2 px-4'
                            >{title}</NavLink>
                        </li>
                    ))
                }
            </div>
        </div>
    );
};

export default DashboardNav;