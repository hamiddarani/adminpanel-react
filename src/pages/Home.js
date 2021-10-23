import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="bg-gray-100 w-full h-screen flex justify-center items-center">
             <Link to='/admin/dashboard' className="bg-gradient-to-tr rounded from-indigo-500 to-indigo-700 px-4 py-2 text-white">ورود به پنل ادمین</Link>
        </div>
    );
};

export default Home;