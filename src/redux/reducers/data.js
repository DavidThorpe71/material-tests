import { GET_POSTS, GET_USERS } from '../../constants/types';

const initialState = {
    posts: [],
    users: []
}


export const getData = (state = initialState, action) => {
    const { type, data } = action;
    switch (type) {
        case GET_POSTS:
            return {
                ...state,
                posts: data
            };
        case GET_USERS:
            return {
                ...state,
                users: data
            };
        default:
            return state;
    }
}

