import { SET_USER, LOG_OUT } from "../constants/userConstants"

const setUser = (userObj) => {
    return {
        type: SET_USER,
        payload: userObj
    }
}

const logOut = () => {
    localStorage.removeItem("userInfo");
    return {
        type: LOG_OUT
    }
}

const userActions = {
    setUser, logOut
}

export default userActions;