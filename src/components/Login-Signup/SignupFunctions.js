import axios from 'axios'

export function registerUser(newUserDetails){
    let apiUrl = 'https://capstone-prograd.herokuapp.com/register'
    return axios.post(apiUrl,newUserDetails,{
        headers:{
            'Content-Type': 'application/json'
        }
    })
}
