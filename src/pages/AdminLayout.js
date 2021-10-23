import React, {  useState } from 'react';
import { Outlet } from 'react-router';


import NavLink from '../components/NavLink';

import userImage from './../assets/img/user-img-1.png'

const Dashboard = () => {
    const [routes] = useState([
        {name : 'داشبورد' , to : '/admin/dashboard' , icon : 'fas fa-bars'},
        {name : 'کاربران' , to : '/admin/users' , icon : 'fas fa-users'},
        {name : 'پست ها' , to : '/admin/posts' , icon : 'far fa-file-alt'},
        {name : 'پرداخت ها' , to : '/admin/payments' , icon : 'fas fa-money-check-alt'},
        {name : 'تنظیمات' , to : '/admin/configs' , icon : 'fas fa-cogs'},
    ]);

    const [isShown , setIsShown] = useState(true)
   

    
    // useEffect(() => {
    //     if(!localStorage.getItem('token')){
    //         navigate('/login')
    //     }
    // } , [])

    const isShownHandler = () => {
        setIsShown(prevState => !prevState)
    }

    return (
        <div className="bg-gray-100 min-h-screen w-full">

            <div className={` ${isShown ? 'w-72 transform translate-x-72 lg:translate-x-0' : 'w-72 lg:w-16'} z-20 transition-all duration-200 border-l border-gray-100 bg-white fixed top-0 right-0 h-screen`}>
                <div className={`${isShown ? 'h-32' : 'h-32 lg:h-16'} w-full  mt-4 flex flex-wrap justify-center items-center relative overflow-hidden`}>
                    <img src={userImage} alt="" className={`${isShown ? 'h-32 w-32' : 'h-32 w-32 lg:h-12 lg:w-12'} transition-all duration-200 rounded-full cursor-pointer`}/>
                    <input type="file" className={`${isShown ? 'h-32 w-32' : 'h-12 w-12'}  absolute rounded-full opacity-0`}/>
                </div>
                <p className={`${isShown ? 'lg:opacity-100 lg:delay-200' : 'lg:opacity-0 lg:hidden'} text-center transition-all duration-200  mt-4 w-full text-gray-800`}>حمید دارانی</p>

                <ul className="mt-4 mx-2">
                    {routes.map(route => <NavLink key={route.to} route={route} isShown={isShown}/>)}
                </ul>
            </div>



            <div className={`${isShown ? 'mr-0 lg:mr-72' : 'mr-0 lg:mr-16'} content transition-all duration-200 `}>
                <div className="header bg-white shadow-sm h-16 flex items-center px-4 justify-between">
                    <i className="fas fa-bars text-lg cursor-pointer" onClick={isShownHandler}></i>
                    <div className="flex gap-2 items-center text-gray-700 cursor-pointer">
                        <span>خروج</span>
                        <i className="fas fa-arrow-left"></i>
                    </div>
                </div>
                <div className="pt-12 px-4">
                    <Outlet />
                </div>
            </div>
            <div className={`${isShown ? 'hidden': 'block'} overlay lg:hidden w-full h-full bg-gray-300 opacity-50 z-10 fixed top-0 right-0`} onClick={isShownHandler}></div>
        </div>
    );
};

export default Dashboard;