import React, { useEffect } from 'react';
import UserCart from '../components/UserCart';
import { useSelector , useDispatch } from 'react-redux';
import { deleteUserAcion, fetchUsers } from '../redux/users/usersAction';
import Aos from 'aos';

import Swal from 'sweetalert2'


const AllUsers = () => {
    
    const usersData = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        Aos.init()
        dispatch(fetchUsers());
    } , [])

    const deleteUser = (id) => {
        Swal.fire({
            title: 'حذف کاربر',
            text: "آیا از این درخواست مطمئن هستید",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'حذف',
            cancelButtonText : 'لغو'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteUserAcion(id))
              Swal.fire(
                'کاربر مورد نظر با موفقیت حذف شد',
                '',
                'success'
              )
            }
          })
    }
    return (
        <div className="lg:px-4 flex flex-wrap mt-4">
            {
                usersData.loading ? <p className="w-full h-72 flex items-center justify-center text-2xl">Loading...</p> : usersData.error ? <p className="w-full h-72 flex items-center justify-center text-2xl">{usersData.error}</p> : usersData.users.map((user , index) => <UserCart dataAos={"fade-up"}  key={user.id} user={user} deleteUser={() => deleteUser(user.id)}/>)
            }
        </div>
    );
};

export default AllUsers;