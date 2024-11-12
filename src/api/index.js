import axios from 'axios';
import NewsLetter from '../components/utils/newsLetter';
const URL_SERV = "http://localhost:3004";

export const getPosts = async(prevState,page=1,order="asc",limit=10 )=>{
    try {
        const res = await axios.get(`${URL_SERV}/posts?_page=${page}&_limit=${limit}&_order=${order}&_sort=id`);
        return {
            posts:prevState.posts ? [...prevState.posts , ...res.data]:res.data,
            page:page,
            end:res.data.length === 0?true:false
        }
    } catch (err) {
        throw err;
    }
}

export const addNewsLetter = async(data)=>{
    try {
        const user = await axios.get(`${URL_SERV}/newsletter?email=${data.email}`);
        if(!Array.isArray(user.data) | !user.data.length){
            const res = await axios({
                method:'POST',
                url:`${URL_SERV}/newsletter`,
                data:{
                    email:data.email
                }
            });
            return {
                newsLetter:'added',
                email:res.data
            }
        }else{
            return{
                newsLetter:'failed'
            }
        }
    } catch (err) {
        throw err;
    }
}

export const getPostById = async(data)=>{
    try {
        const res = await axios.get(`${URL_SERV}/posts/${data}`);
        return res.data
    } catch (err) {
        return '404';
    }
}
export const sendMessage=async(data)=>{
    try {
        const res = await axios({
            method:'POST',
            url:`${URL_SERV}/contact`,
            data :data
        });
        return true;
    } catch (err) {
        throw err;
    }
}