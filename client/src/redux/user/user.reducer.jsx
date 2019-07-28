import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
    currentUser: null
}

//State is whatever it is currently, if not defined will fall back to default parameter
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }

        default:
            return state;
    }
}

export default userReducer;