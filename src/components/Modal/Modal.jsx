import React from 'react';

const Modal = () => {
    return (
        <dialog className='w-[98%] max-w-[500px] rounded-md'>
            <div className='text-right mb-4'>
                <button>Close</button>
            </div>
            <form>
                <input
                    className='w-full mb-2 p-2 focus:outline-none border '
                    type="text"
                    placeholder='title'
                    name='title' />
                <input
                    className='w-full mb-2 p-2 focus:outline-none border '
                    type="number"
                    placeholder='price'
                    name='price' />
                <button className='text-white px-2 py-1 bg-blue-600 focus:outline'>Submit</button>
            </form>
        </dialog>
    );
};

export default Modal;