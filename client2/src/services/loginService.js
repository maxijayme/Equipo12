import {URL} from '../utils/url' 

export default async function login ({username,password}){
        const loginResponse = await fetch(`${URL}/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({username,password})
        })
        return loginResponse;
}