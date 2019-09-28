import {combineReducers} from 'redux'
import dataReducer from './dataReducer'
import userReducer from './userReducer'
import tabReducer from './tabReducer'

export default combineReducers({
    data: dataReducer,
    user: userReducer,
    tab: tabReducer
})