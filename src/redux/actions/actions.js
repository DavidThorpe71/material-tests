import axios from 'axios';
import { GET_DATA } from '../../constants/types';


export function getPosts() {
    return async function (dispatch) {
        const posts = await axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.data);
        return dispatch({
            type: 'GET_DATA',
            data: posts
        })
    }
}