import axios from 'axios';
import { GET_POSTS, GET_USERS } from '../../constants/types';


export function getPosts() {
    return async function (dispatch) {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data);
        return dispatch({
            type: GET_POSTS,
            data: posts
        })
    }
}

export function getUsers() {
    return async function (dispatch) {
        const users = await axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => res.data);
        return dispatch({
            type: GET_USERS,
            data: users
        })
    }
}