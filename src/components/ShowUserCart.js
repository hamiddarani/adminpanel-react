import React from 'react';

const ShowUserCart = ({user}) => {
    return (
        <>
           <div className="mt-4 lg:px-4 py-4 w-full h-auto bg-white rounded">
                <p className="text-gray-700 my-2 text-2xl ">نام : {user.name}</p>
                <p className="text-gray-700 my-2 text-2xl ">ایمیل : {user.email}</p>
                <p className="text-gray-700 my-2 text-2xl ">نام مستعار : {user.username}</p>
                <p className="text-gray-700 my-2 text-2xl ">شماره تماس : {user.phone}</p>
                <p className="text-gray-700 my-2 text-2xl ">وب سایت : {user.website}</p>
            </div> 
        </>
    );
};

export default ShowUserCart;