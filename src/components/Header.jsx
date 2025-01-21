import React, { useState } from 'react'
import { GoArrowUpRight } from 'react-icons/go'
import { IoSearchOutline } from 'react-icons/io5'
import { TbHeartHandshake } from 'react-icons/tb'

function Header() {
    const [isMenuOpen, setIsMenuOpen]=useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);
    }
    const toggleSearch = () => {
        setIsSearchOpen(true);
      };
    
      const closeSearch = () => {
        setIsSearchOpen(false);
      };
    
  return (
    <header>
        <nav className='flex justify-between items-center p-4 mt-4 mx-4'>
            <div>
                <button className='flex items-center gap-1 border-2 border-white bg-white px-2 py-1 rounded-full shadow-md '>
                    <span className='border-2 border-yellow-500  bg-yellow-500 rounded-[50%] p-1'>
                    <TbHeartHandshake size={20} />
                    </span>
                    Slugger
                </button>
            </div>

            {/* Desktop menu */}
            <div className='hidden md:flex gap-x-4'>
                
                <button className=' border-[1px] border-white px-2 py-1 rounded-full shadow-md text-white  hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-200 transition-all duration-500 '>
                    Home
                </button>
                <button className=' border-[1px] border-white px-2 py-1 rounded-full shadow-md text-white  hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-200 transition-all duration-500'>
                    Programs
                </button>
                <button className=' border-[1px] border-white px-2 py-1 rounded-full shadow-md text-white  hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-200 transition-all duration-500'>
                    Coaches
                </button>
                <button className=' border-[1px] border-white px-2 py-1 rounded-full shadow-md text-white  hover:border-yellow-500 hover:bg-yellow-500 hover:text-gray-200 transition-all duration-500'>
                    Scedule
                </button>
                

                <div className="relative flex items-center">
            {!isSearchOpen && (
              <button
                onClick={toggleSearch}
                className="border-2 border-white rounded-full bg-white hover:border-yellow-500 hover:bg-yellow-500 p-1 transition-all duration-500"
              >
                <IoSearchOutline size={25} />
              </button>
            )}
            <div
              className={`absolute left-0 bg-white px-2 py-1 shadow-md rounded-3xl transition-all duration-500 overflow-hidden flex items-center ${
                isSearchOpen ? 'w-64 opacity-100' : 'w-0 opacity-0'
              }`}
            >
              <input
                type="text"
                placeholder="Search..."
                className="flex-grow px-2 py-1 outline-none border-none"
              />
              <button
                onClick={closeSearch}
                className="text-gray-500 hover:text-gray-700 ml-2"
              >
                ✕
              </button>
            </div>
          </div>
        



            </div>

            {/* cta button */}
            <div className='hidden md:flex'>
                <button className='flex items-center gap-1 border-2 border-white bg-white hover:border-yellow-500 hover:bg-yellow-500 px-2 py-1 rounded-full shadow-md '>
                    Free Trial
                    <span className='border-2 border-gray-800  bg-gray-800 rounded-[50%] p-1 text-white'>
                        <GoArrowUpRight size={20}/>
                    </span>
                
                </button>
            </div>

           
            <button
                onClick={toggleMenu}
                className="md:hidden text-yellow-500 focus:outline-none"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
                </svg>
            </button>
                
            
        </nav>

         {/* Mobile Menu */}
         {isMenuOpen && (
            <div className="md:hidden block bg-white p-4 py-12 rounded-xl shadow-md absolute top-[-50px] left-0 w-[50%] mt-12">
                <div className="flex flex-col space-y-4 px-4 py-2">
                    <a
                        href="/"
                        className="text-gray-600 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Home
                    </a>
                    <a
                        href="/"
                        className="text-gray-600 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Program
                    </a>
                    <a
                        href="/"
                        className="text-gray-600 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Coaches
                    </a>
                    <a
                        href="/"
                        className="text-gray-600 hover:text-yellow-500"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Scedule
                    </a>
                    
                    <button className='w-fit flex items-center gap-1 border-2 -ml-2 border-white bg-white hover:border-gray-100 hover:bg-gray-100 px-2 py-1 rounded-full shadow-lg '>
                        Free Trial
                        <span className='border-2 border-gray-800  bg-gray-800 rounded-[50%] p-1 text-white'>
                            <GoArrowUpRight size={20}/>
                        </span>
                    
                    </button>
                </div>
            </div>
        )}
    
    </header>
  )
}

export default Header










