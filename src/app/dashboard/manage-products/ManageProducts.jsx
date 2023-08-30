'use client'

import { useRef, useState, useTransition } from 'react';
import ManageSingleProduct from './ManageSingleProduct';
import Modal from '@/components/Modal/Modal';
import { useRouter } from 'next/navigation';

const ManageProducts = ({ products }) => {
    const modalRef = useRef(null);
    const [updateData, setUpdateData] = useState(null)
    const [isPending, startTransition] = useTransition();
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const isLoading = isPending || loading;

    const openModal = (product) => {
        setUpdateData(product);
        modalRef.current.showModal();
    }

    const closeModal = () => {
        setUpdateData(null);
        modalRef.current.close();
    }

    // Update single product using json server
    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const data = {
            title,
            price
        }
        if (title && price) {
            try {
                // ${process.env.BASE_API_URL}
                const res = await fetch(`http://localhost:5000/products/${updateData?.id}`, {
                    method: "PATCH",
                    headers: {
                        'content-type': "application/json"
                    },
                    body: JSON.stringify(data)
                });
                const result = await res.json();
                form.reset();
                closeModal();
                startTransition(() => {
                    router.refresh();
                })
                console.log(result);
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    return (
        <div>
            <table className={`border-collapse w-full ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
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
            <Modal ref={modalRef} closeModal={closeModal} updateData={updateData} handleSubmit={handleSubmit} />
        </div>
    );
};

export default ManageProducts;