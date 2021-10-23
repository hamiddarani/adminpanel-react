import React from 'react';
import BreadCrump from '../components/BreadCrump';

import { Link } from 'react-router-dom';
import { Outlet, useLocation } from 'react-router';

const Posts = () => {
    const location = useLocation();
    return (
        <div>
            <BreadCrump>
                <li className=" flex items-center justify-center py-3">
                    پست ها
                </li>
            </BreadCrump>
            <div className="tabs w-full h-16 bg-transparent flex gap-4 lg:px-4 items-center text-gray-500 ">
                <Link to='/admin/posts' className={`${location.pathname === '/admin/posts' ? 'bg-gray-200 px-4 py-2 rounded-lg text-gray-900' : ''}`}>همه پست</Link>
                <Link to='/admin/posts/create' className={`${location.pathname === '/admin/posts/create' ? 'bg-gray-200 px-4 py-2 rounded-lg text-gray-900' : ''}`}>ایجاد پست جدید</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Posts;