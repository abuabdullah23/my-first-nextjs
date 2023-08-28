import Image from 'next/image';
import React from 'react';

const SingleProduct = ({ product }) => {
    const { id, title, price, imageUrl } = product;
    return (
        <div className='border rounded-md p-5'>
            <img src={imageUrl} alt="Product Image" />
            <h1> {title} </h1>
        </div>
    );
};

export default SingleProduct;