import { SET_LOGINED_REQUEST, SET_LOGINED_SUCCESS, SET_LOGINED_FAILED } from '../constants/User'

const initialState = {
    name: cunameUser.username,
    logined: (cunameUser.username && cunameUser.username != 'Гость') ? true : false
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case SET_LOGINED_REQUEST:
            return Object.assign({}, state, {logined: action.payload});

        case SET_LOGINED_FAILED:
            return Object.assign({}, state);

        case SET_LOGINED_SUCCESS:
            return Object.assign({}, state, {logined: action.payload});

        default:
            return state;
    }
}