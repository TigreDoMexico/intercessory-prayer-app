import {
    CREATE_USER,
} from '../actions/actions'

const initialState = {
    user: {},
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.user,
            }
        default:
            return state;
    }
}

export default reducer;