import React from 'react';
import { useNavigate } from 'react-router';

const UserCart = ({user , deleteUser , dataAos }) => {
    const navigate = useNavigate();
    return (
        <>
             <div data-aos={dataAos} className="px-2 py-2 w-full  md:w-1/2 lg:w-1/3 xl:w-1/4">
                <div className="user-cart  rounded-lg bg-white ">
                    <div className="w-full  flex px-4 py-2">
                        <span className="w-1/4">نام :</span>
                        <span className="w-3/4">{user.name}</span>
                    </div>
                    <div className="w-full flex px-4 py-2">
                        <span className="w-1/4">ایمیل :</span>
                        <span className="w-3/4">{user.email}</span>
                    </div>
                    <div className="w-full flex px-4 py-2">
                        <span className="w-1/4">شماره :</span>
                        <span className="w-3/4">{user.phone}</span>
                    </div>
                    <div className="w-full flex px-4 py-2">
                        <span className="w-1/4">وب سایت :</span>
                        <span className="w-3/4">{user.website}</span>
                    </div>
                    <div className="w-full flex px-4 py-2">
                        <span className="w-1/4">عملیات :</span>
                        <i className="fas fa-times mr-2 text-lg text-yellow-500 cursor-pointer"></i>
                        <i className="fas fa-check mr-2 text-lg text-green-500 cursor-pointer"></i>
                        <i className="far fa-eye mr-2 text-lg text-blue-500 cursor-pointer" onClick={() => navigate(`/admin/users/${user.id}`) }></i>
                        <i className="fas fa-trash-alt mr-2 text-lg text-red-500 cursor-pointer" onClick={deleteUser}></i>
                        <i className="fas fa-edit mr-2 text-lg cursor-pointer" onClick={() => navigate(`/admin/users/${user.id}/edit`) }></i>
                    </div>
                </div> 
            </div>
        </>
    );
};

export default UserCart;