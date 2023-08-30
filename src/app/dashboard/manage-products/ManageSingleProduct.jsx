import React from 'react';

const ManageSingleProduct = ({ product, index, openModal, handleDelete }) => {
    const { id, title, price, categoryId, imageUrl } = product;
    return (
        <tr className='text-center w-full'>
            <td className='border border-gray-400 p-2'>{index += 1}</td>
            <td className='border border-gray-400 p-1'>
                <img className='w-20 h-full' src={imageUrl} alt="Products Image" />
            </td>
            <td className='border border-gray-400 p-2'>{title}</td>
            <td className='border border-gray-400'>{price}</td>
            <td className='border border-gray-400'>
                <button
                    onClick={() => openModal(product)}
                    className='text-gray-400 hover:text-gray-700'>
                    Update
                </button>
            </td>
            <td className='border border-gray-400'>
                <button onClick={() => handleDelete(id)} className='text-red-400 hover:text-gray-700'>
                    Delete
                </button>
            </td>
        </tr>
    );
};

export default ManageSingleProduct;