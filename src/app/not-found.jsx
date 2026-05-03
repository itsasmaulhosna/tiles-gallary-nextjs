import Link from 'next/link';
import React from 'react';

const notfound = () => {
    return (
        <div className='text-center flex justify-center items-center flex-col h-[80vh] space-y-5'>
            <h2 className='text-4xl text-red-500 font-bold'>This page is not found</h2>
            <Link href={'/'}>
            <button className='btn'>Back to home</button>
            </Link>
        </div>
    );
};

export default notfound;