const URL = 'http://localhost:3001';
const token = window.localStorage.getItem('jwt')


export default async function login({username,password}){
        const loginResponse = await fetch(`${URL}/login`,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `"Bearer ${token}"`
        },
        body: JSON.stringify({username,password})
        })
        const responseJson = await loginResponse.json()
        if(loginResponse.status === 200){
            localStorage.setItem("userIdTeclapedia",JSON.stringify(responseJson[0].id_usuario))
            const {jwt} = responseJson;
            return jwt
        }else if(loginResponse.status === 401){
            if(responseJson.uservalid !== ''){return responseJson.uservalid};
            if(responseJson.passwordvalid !== ''){return responseJson.passwordvalid};
        }
        else{
            return 'El usuario o la contraseña son incorrectos'
        }
    
}