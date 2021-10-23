import React , {useEffect} from 'react';
import {useSelector , useDispatch} from 'react-redux';
import { useParams } from 'react-router';
import ShowUserCart from '../components/ShowUserCart';
import { fetchUser } from '../redux/users/usersAction';



const ShowUser = () => {

    const userData = useSelector(state => state.usersReducer);
    const dispatch = useDispatch();
    const params = useParams();
    useEffect(() => {
        dispatch(fetchUser(params.id))
        
    } , [])

    return (
        <>
            {
                userData.loading ? <p className="w-full h-72 flex items-center justify-center text-2xl">Loading...</p> : userData.error ? <p className="w-full h-72 flex items-center justify-center text-2xl">{userData.error}</p> : <ShowUserCart user={userData.user}/> 

            }
        </>
        
    );
};

export default ShowUser;