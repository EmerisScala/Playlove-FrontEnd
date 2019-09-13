import {
    CHECK_AUTH,
    LOGGING_USER,
    LOGGING_USER_SUCCESS,
    LOGGING_USER_FAILURE
} from '../constants'

const initialState =  {
data: [],
token: "",
isLogging: false,
result: false,
error: false,
}

export default userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGGING_USER:
            return {
                ...state,
                data: [],
                isLogging : true
            }
        case LOGGING_USER_SUCCESS: 
            return {
                ...state,
                data: action.userData,
                isLogging : false,
                result: true
            }
        case LOGGING_USER_FAILURE:
            return {
                ...state,
                isLogging : false,
                error: true
            }
        default:
        return state
    }
}