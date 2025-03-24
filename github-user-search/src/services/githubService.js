import  axios from 'axios';


export const fetchUserData = async (username) => {
    try{
       const res = await axios.get(`https://api.github.com/users/${username}`)
       console.log(res.data)
       return res.data;
    }catch(err){
        console.error(err)
    }
}