/* eslint-disable jsx-a11y/anchor-is-valid */
import React from'react';
import { Link } from "react-router-dom";


const Header = () => (
         
<header className="lg\:px-16 px-0 bg-gray-700 flex flex-wrap items-center lg\:pt-0 py-4 mb-0 ">
    <div className="flex-1 flex justify-between items-center">
        <a href="#">
            <svg width="32" height="36" viewBox="0 0 32 36" ></svg>
        </a>
    </div>
    <label for="menu-toggle" className="pointer-cursor lg:hidden block">
        <svg className="fill-current text-gray-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"> 
        <title> Menu </title> 
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
        </svg>
    </label>
    <input className="hidden" type="checkbox" id="menu-toggle" />
    <div className="hidden lg:flex lg:items-center lg:w-auto w-full mr-3" id="menu">
                <Link to="/">
                    <button className="lg:ml-4 flex items-center justify-start lg:mb-0 mb-4 pointer-cursor">
                    <img className="rounded-full w-10 h-10 border-2 border-transparent hover:border-indigo-400" src="https://img.icons8.com/color/48/000000/enter-2.png" alt="Andy Leverenz"></img>

                    </button>
                </Link>
    </div>
</header>
 
                 
    
)

export default Header;