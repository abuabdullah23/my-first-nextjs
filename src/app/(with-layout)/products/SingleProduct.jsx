import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleProduct = ({ product }) => {
    const { id, title, price, imageUrl } = product;
    return (
        <Link
        href={`/products/${id}`}
        className='border rounded-md p-5 hover:bg-gray-200'>
            <img src={imageUrl} alt="Product Image" />
            <h1> {title} </h1>
        </Link>
    );
};

export default SingleProduct;