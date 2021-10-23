import axios from "axios"


//get all users
const fetchUsersRequest = () => {
    return {
        type : "FETCH_USERS_REQUEST"
    }
}

const fetchUsersSuccess = (users) => {
    return {
        type : "FETCH_USERS_SUCCESS",
        payload : users
    }
}

const fetchUsersFailiur = (error) => {
    return {
        type : "FETCH_USERS_FAILIUR",
        payload : error
    }
}


export const fetchUsers = () => {
    return  async(dispatch) => {
        try {
            dispatch(fetchUsersRequest());
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
            dispatch(fetchUsersSuccess(data));
        } catch (error) {
            dispatch(fetchUsersFailiur(error.message))
        }
    }
}
//end get all users


//get single user

const fetchUserSuccess = user => {
    return {
        type : "FETCH_USER_SUCCESS",
        payload : user
    }
}

const fetchUserFailiur = error => {
    return {
        type : "FETCH_USER_FAILIUR",
        payload : error
    }
}

export const fetchUser = (id) => {
    return async(dispatch) => {
        try {
            dispatch(fetchUsersRequest);
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch(fetchUserSuccess(data))
        } catch (error) {
            dispatch(fetchUserFailiur(error.message))
        }
    }
}
// end get single user


//delete user
const deleteUserSuccess = (id) => {
    return {
        type : "DELETE_USER_SUCCESS",
        payload : id
    }
} 

export const deleteUserAcion = (id) => {
    return async(dispatch) => {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
            dispatch(deleteUserSuccess(id))
        } catch (error) {
            dispatch(fetchUsersFailiur(error.message))
        }
    }
}
//end delete user