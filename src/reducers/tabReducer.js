import {
    CHANGE_INDEX,
    LOAD_FONTS
} from '../constants'

const initialState = {
    index: 1,
    fontLoaded: false
}

export default tabReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_INDEX:
            return {
                ...state,
                index: action.payload
            }

        case LOAD_FONTS:
            return {
                ...state,
                fontLoaded: true
            }

        default:
            return state
    }
}
