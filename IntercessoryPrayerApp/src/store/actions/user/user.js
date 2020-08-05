import { CREATE_USER } from '../actions'

export const createUser = (user) => {
    return dispatch => {
        dispatch({
            type: CREATE_USER,
            user: user,
        });
    }
}
