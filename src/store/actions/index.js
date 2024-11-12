import { type } from '@testing-library/user-event/dist/type';
import * as api from '../../api';
import { 
    GET_POSTS,
    ADD_NEWSLETTER,
    CLEAR_NEWSLETTER,
    GET_POST_BY_ID,
    CLEAR_POST_BY_ID,
    SEND_MESSAGE
} from '../types';


/*////////////////////////////////////
            POST
/////////////////////////////////////*/

export const getPosts = (homePosts,page,order,limit) => ({
    type: GET_POSTS,
    payload: api.getPosts(homePosts,page,order,limit)
})

export const getPostById = (id) => ({
    type: GET_POST_BY_ID,
    payload:api.getPostById(id)
})

export const clearPostById = () => ({
    type: CLEAR_POST_BY_ID,
    payload: {}
})

/*////////////////////////////////////
            USER
/////////////////////////////////////*/

export const addNewsLetter = (data) => ({
    type: ADD_NEWSLETTER,
    payload: api.addNewsLetter(data)
})
export const sendMessage =(data)=>({
    type:SEND_MESSAGE,
    payload:api.sendMessage(data)
})

export const clearNewsletter = () => ({
    type: CLEAR_NEWSLETTER,
    payload: {}
})