import React from 'react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mt-4 px-4'>
            <h1 className='text-xl font-bold'>BUYBLISS</h1>
            <div className="relative">
                <input
                    type="text"
                    className='w-[450px] h-7 block pl-10 border-slate-400 rounded'
                    placeholder='What are you looking for?'
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
            <div className='flex items-center gap-4'>
                <ShoppingCart />
                <Heart />
                <div className='border-l border-gray-400 h-8 mx-2' /> 
                <div className='h-10 w-10 rounded-full bg-gray-600 flex items-center justify-center text-white'>
                    AR
                </div>
                <div className='flex items-center pl-2'>
                    <div className='flex flex-col'>
                        <h1>Welcome Back!</h1>
                        <h1 className='font-bold'>Khaldoon Mansour</h1>
                    </div>
                    <ChevronDown className='ml-2 mt-1 text-gray-600' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;

 
