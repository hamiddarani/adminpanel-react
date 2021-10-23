import React from 'react';
import {Formik} from 'formik';
import { useNavigate } from 'react-router';

import validationSchema from '../validation/userSchema';

const CreateUser = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1 className="text-2xl mt-4 lg:px-4">ایجاد کاربر جدید</h1>
            <div className="lg:px-4 flex flex-wrap mt-4">
                <Formik
                 initialValues={{name : "" , email : "" , password : "" , confirmPassword : "" , role : "" , status : ""}}
                 onSubmit = {(value => console.log(value))}
                 validationSchema={validationSchema}
                 >
                   {({handleChange , handleSubmit , errors, setFieldTouched , touched}) => (
                       <>
                            <div className="flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <div className="w-full flex flex-col px-4 mb-2">
                                    <label className="text-gray-800 mb-2">نام</label>
                                    <input name="name" className="w-full h-full focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 rounded-lg placeholder-gray-500" placeholder="نام کاربر را وارد کنید" onChange={handleChange("name")} onBlur={() => setFieldTouched('name')}/>
                                </div>
                                {touched.name &&  <p className="text-red-600 px-4">{errors.name}</p>}
                            </div>
                            <div className="flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <div className="w-full flex flex-col px-4 mb-2">
                                    <label className="text-gray-800 mb-2">ایمیل</label>
                                    <input name="email" className="w-full h-full focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 rounded-lg placeholder-gray-500" placeholder="ایمیل کاربر را وارد کنید" onChange={handleChange("email")}  onBlur={() => setFieldTouched('email')}/>
                                </div>
                                {touched.email && <p className="text-red-600 px-4">{errors.email}</p>}
                            </div>
                            <div className="flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <div className="w-full flex flex-col px-4 mb-2">
                                    <label className="text-gray-800 mb-2">کلمه عبور</label>
                                    <input name="password" className="w-full h-full focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 rounded-lg placeholder-gray-500" placeholder="کلمه عبور را وارد کنید" onChange={handleChange("password")}  onBlur={() => setFieldTouched('password')}/>
                                </div>
                                {touched.password && <p className="text-red-600 px-4">{errors.password}</p>}
                            </div>
                            <div className="flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <div className="w-full flex flex-col px-4 mb-4">
                                    <label className="text-gray-800 mb-2">تکرار کلمه عبور</label>
                                    <input name="confirmPassword" className="w-full h-full focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 rounded-lg placeholder-gray-500" placeholder=" تکرار کلمه عبور را وارد کنید" onChange={handleChange("confirmPassword")}  onBlur={() => setFieldTouched('confirmPassword')}/>
                                </div>
                                {touched.confirmPassword && <p className="text-red-600 px-4">{errors.confirmPassword}</p>}
                            </div>
                            <div className="flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <div className="w-full flex flex-col px-4 mb-4">
                                    <label className="text-gray-800 mb-2">سطح دسترسی</label>
                                    <select name="role" className="w-full h-full focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 rounded-lg placeholder-gray-500" onChange={handleChange("role")}  onBlur={() => setFieldTouched('role')}>
                                        <option value="">انتخاب سطح دسترسی</option>
                                        <option>کابر ساده</option>
                                        <option>مدیر</option>
                                        <option>نویسنده</option>
                                    </select>
                                </div>
                                {touched.role && <p className="text-red-600 px-4">{errors.role}</p>}
                            </div>
                            <div className="flex-col w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
                                <div className="w-full flex flex-col px-4 mb-4">
                                    <label className="text-gray-800 mb-2">وضعیت</label>
                                    <select name="status" className="w-full h-full focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 py-2 px-4 rounded-lg placeholder-gray-500" onChange={handleChange("status")}  onBlur={() => setFieldTouched('status')}>
                                        <option value="">انتخاب وضعیت کابر </option>
                                        <option>تائید شده</option>
                                        <option>تائید نشده</option>
                                    </select>
                                </div>
                                {touched.status && <p className="text-red-600 px-4">{errors.status}</p>}
                            </div>
                           <div className="flex justify-end w-full mt-2 gap-2">
                               <button className="bg-gradient-to-br from-gray-500 to-gray-800 px-4 py-2 text-white rounded" onClick={() =>navigate('/admin/users')}>بازگشت</button>
                               <button type="submit" className="bg-gradient-to-br from-blue-400 to-blue-700 px-4 py-2 text-white rounded" onClick={handleSubmit}>ایجاد کاربر</button>
                           </div>
                      </>
                   )}
                </Formik>
                
            </div>
           
        </>
    );
};

export default CreateUser;