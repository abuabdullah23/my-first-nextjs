import React from 'react';

const ProductsLoading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex items-center gap-3 bg-gray-600 py-2 px-6 rounded-md'>
                <h1 className='text-center font-semibold text-2xl text-white'>Loading...</h1>
            </div>
        </div>
    );
};

export default ProductsLoading;