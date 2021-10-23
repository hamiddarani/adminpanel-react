const initialState = {
    loading : false,
    users : [],
    error : "",
    user : {}
}

const usersReducer = (state = initialState , action) => {
    switch (action.type){
        case "FETCH_USERS_REQUEST" :
            return {
                ...state,
                loading : true,
            }
        case "FETCH_USERS_SUCCESS" :
            return {
                ...state,
                loading : false,
                users : action.payload,
                user : {}
            }    
        case "FETCH_USERS_FAILIUR" : 
            return {
                ...state,
                loading : false,
                users : [],
                user : {},
                error : action.payload
            }
        case "FETCH_USER_SUCCESS" : 
            return {
                ...state,
                loading : false,
                user : action.payload
            }
        case "FETCH_USER_FAILIUR":
            return {
                ...state,
                loading : false,
                user : {},
                error : action.payload
            }
        case "DELETE_USER_SUCCESS":
            return {
                ...state,
                users : state.users.filter(user => user.id !== action.payload)
            }
        default :
            return state
    }
}

export default usersReducer;