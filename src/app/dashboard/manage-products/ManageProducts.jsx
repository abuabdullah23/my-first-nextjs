'use client'

import { useRef, useState } from 'react';
import ManageSingleProduct from './ManageSingleProduct';
import Modal from '@/components/Modal/Modal';

const ManageProducts = ({ products }) => {
    const modalRef = useRef(null);
    const [updateData, setUpdateData] = useState(null)

    const openModal = (product) => {
        setUpdateData(product);
        modalRef.current.showModal();
    }

    const closeModal = () =>{
       setUpdateData(null);
       modalRef.current.close(); 
    }
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
                                openModal={openModal}
                            />
                        ))
                    }
                </tbody>
            </table>
            <Modal ref={modalRef} closeModal={closeModal} updateData={updateData}/>
        </div>
    );
};

export default ManageProducts;