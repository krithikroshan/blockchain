import { SET_USER, LOG_OUT } from "../constants/userConstants"

const currentUser = (state = {}, action) => {
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                loggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state
    }
}

export default currentUser;