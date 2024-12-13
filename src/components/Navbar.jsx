import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingBag } from 'lucide-react';
import { Search } from 'lucide-react';
import { X } from 'lucide-react';
import { ChevronRight } from 'lucide-react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Use camelCase for state setter

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='flex flex-row justify-between items-center p-4 gap-4'>
                <div className='flex gap-2'>
                    <Menu onClick={toggleMenu} />
                    <span onClick={toggleMenu}>MENU</span>
                </div>

                <h1 className='font-semibold text-[18px]'>BUYBLISS</h1>

                <div className='flex gap-2'>
                    <Heart />
                    <ShoppingBag />
                </div>
            </div>

            {/* Sidebar menu display */}
            {isMenuOpen && (
                <div className='bg-white w-80 h-screen fixed top-0 left-0 z-50 p-4 overflow-y-auto'> {/* Full height and scrollable */}
                    <X className='cursor-pointer' onClick={toggleMenu} /> {/* Close icon */}
                    <div className='border-b border-black my-4' /> 
                    <div className='flex gap-4'>
                        <span>MEN</span>
                        <span>WOMEN</span>
                    </div>
                    <div className='border-b border-black my-4' /> 
                    <span>New Arrival</span>
                    <div className='border-b border-black my-8' /> 

                    {['Shoe type', 'Occasion', 'Brands', 'Shoe care', 'Accessories', 'Services', 'Journal', 'About us'].map((item, index) => (
                        <div key={item}>
                            <div className='flex items-center justify-between my-2'>
                                <span>{item}</span>
                                {item !== 'Journal' && <ChevronRight />} {/* Only show Chevron for items except 'Journal' */}
                            </div>
                            <div className='border-b border-black my-2' /> {/* Horizontal line after each item */}
                        </div>
                    ))}
                </div>
            )}
            {/* End of sidebar menu display */}

            <div className='relative p-2 flex'>
                <input
                    type="text"
                    placeholder='Search....'
                    className='border-solid border-2 border-gray-400 h-9 w-full rounded pl-10' // Adjust padding for search icon
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" />
            </div>
        </>
    );
}

export default Navbar;