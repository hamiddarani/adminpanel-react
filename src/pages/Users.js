import React from 'react';
import { Outlet, useLocation   } from 'react-router';
import { Link } from 'react-router-dom';
import BreadCrump from '../components/BreadCrump';

const Users = () => {
    const location = useLocation()
   
    return (
        <div>
            <BreadCrump>
                <li className=" flex items-center justify-center py-3">
                    کاربران
                </li>
            </BreadCrump>
            <div className="tabs w-full h-16 bg-transparent flex gap-4 lg:px-4 items-center text-gray-500 ">
                <Link to='/admin/users' className={`${location.pathname === '/admin/users' ? 'bg-gray-200 px-4 py-2 rounded-lg text-gray-900' : ''}`}>همه کاربران</Link>
                <Link to='/admin/users/create' className={`${location.pathname === '/admin/users/create' ? 'bg-gray-200 px-4 py-2 rounded-lg text-gray-900' : ''}`}>ایجاد کاربر جدید</Link>
            </div>
            <Outlet />
        </div>
    );
};

export default Users;