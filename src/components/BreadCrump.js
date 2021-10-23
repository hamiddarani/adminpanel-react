import React from 'react';


const BreadCrump = ({children}) => {
    
    return (
        <div>
            <div className="breadcrump text-gray-600 bg-white rounded-lg w-full h-16 mb-4">
                <ul className="w-full h-full flex item-center gap-2 px-4 ">
                    <li className=" flex items-center justify-center py-3">
                            مدیریت
                            <i className="fas fa-chevron-left mr-2"></i>
                    </li>
                    {children}
                </ul>
            </div>
        </div>
    );
};

export default BreadCrump;