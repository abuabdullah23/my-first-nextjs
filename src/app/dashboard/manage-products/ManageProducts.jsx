import React from 'react';
import ManageSingleProduct from './ManageSingleProduct';

const ManageProducts = ({ products }) => {
    return (
        <div>
            <table className='w-full'>
                <thead>
                    <tr>
                        <th className='border border-gray-400'>S.N.</th>
                        <th className='border border-gray-400'>Image</th>
                        <th className='border border-gray-400'>Title</th>
                        <th className='border border-gray-400'>Price</th>
                        <th className='border border-gray-400'>Update</th>
                        <th className='border border-gray-400'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) => (
                            <ManageSingleProduct
                                key={product.id}
                                index={index}
                                product={product}
                            />
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;