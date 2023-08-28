import Link from 'next/link';
import React from 'react';

const SingleCategory = ({category}) => {
    const {id, name} = category;
    return (
        <Link 
        className='border border-gray-400 py-1 px-4 transition hover:bg-gray-400 hover:text-white'
        href={`/products?categoryId=${id}`}>
            {name}
        </Link>
    );
};

export default SingleCategory;