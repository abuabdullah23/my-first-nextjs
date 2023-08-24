import Navbar from '@/components/Navbar/Navbar';
import React from 'react';

const WithLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div className='container mx-auto'>
                {children}
            </div>
        </div>
    );
};

export default WithLayout;