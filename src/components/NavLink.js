import React from 'react';
import { Link } from 'react-router-dom';

import { useLocation } from 'react-router';


const NavLink = ({route , isShown}) => {
    const location = useLocation();
    return (
        <li className="w-full flex rounded-full my-2 overflow-hidden ">
            <Link to={route.to} className={` w-full flex gap-2 md:gap-0 items-center  rounded-full ${isShown ? 'px-4 py-2' : 'h-12 w-12 justify-center'}  cursor-pointer  transition-all duration-200  ${location.pathname.includes(route.to) ? 'bg-gradient-to-tr from-indigo-400 to-indigo-700 text-white' : 'bg-gray-100 hover:bg-gray-200'}` } >
                <i className={`${isShown ? 'ml-4' : ''} ${route.icon}` }></i>
                <span className={` transition-all duration-200   ${isShown ? 'md:opacity-100 md:w-auto md:delay-200' : 'md:opacity-0 md:w-0'}`}>{route.name  }</span>
            </Link>
        </li>
    );
};

export default NavLink;