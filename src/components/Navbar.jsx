import React from 'react';
import { Search } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { Menu } from 'lucide-react';
import ReactCountryFlag from "react-country-flag"

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center mt-4 px-4 gap-4'>
            <div className='flex items-center w-full md:w-auto gap-4'>
                <h1 className='text-2xl md:text-3xl font-extrabold tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:from-purple-600 hover:to-blue-600 transition-all duration-300 cursor-pointer'>BUYBLISS</h1>
                <div className="relative flex-1 md:w-[450px] max-w-[250px] md:ml-10">
                    <input
                        type="text"
                        className='w-full h-8 block pl-10 border border-slate-400 rounded-lg focus:border-[0.5px] md:w-[900px]'
                        placeholder='What are you looking for?'
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
                </div>
                <Menu className='block md:hidden' />
            </div>

            {/* Desktop Navigation */}
            <div className='hidden md:flex items-center gap-4'>
                <ShoppingCart />
                <Heart />
                <div className="flex items-center gap-1 ml-2">
                    <ReactCountryFlag countryCode="US" svg style={{width: '24px', height: '24px'}} />
                    <span>English</span>
                    <ChevronDown className='ml-2 mt-1 text-black' />
                </div>
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
