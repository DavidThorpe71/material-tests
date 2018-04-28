import { GET_DATA } from '../../constants/types';

export default function (state = {}, action) {
    const { type, data } = action;
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                posts: data
            };
        default:
            return state;
    }
}