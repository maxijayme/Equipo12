import { useNavigate } from 'react-router-dom'
import React, { useState } from "react";
import Layout from "../../components/Layout/Layout"
import RegisterUI from "./RegisterUI"
import {URL} from '../../utils/url' 


export default function Register(){
    
    const navigate = useNavigate();
    const [error, setError] = useState('')

    const handleSubmit = async(values) => {
        console.log(values)
        
        // para comprobar si existe
        try {
            const response = await fetch(`${URL}/register/exist`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            });
            if (response.status === 401) {
                const responseJson = await response.json();
                console.log(responseJson);
                if(responseJson.dataEmail){
                    setError("El email ya está en uso")
                    console.log('El email ya está en uso')
                }
                if(responseJson.dataUserName){
                    setError('El usuario ya está en uso')
                    console.log('El usuario ya está en uso')                    
                } 
            } else {
                //Este para crear después el nuevo usuario
                await fetch(`${URL}/register`,{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values)
                    }).then(data => {
                        if(data.status === 200){
                            console.log('Usuario registrado')
                            navigate('/form')
                        } else if (data.status === 400){                            
                            console.log('Usuario registrado')
                            setError('Usuario registrado')
                        }
                })
            }
        } catch (error) {
            console.error("Error:", error);
            setError(error.message || 'Hubo un error en el registro')
        }        
    }
    
    return(
        <Layout navbarOff={false}>
            <div className={error ? "error-message" : "hidden"}>
                {error && <p>{error}</p>}
            </div>
            <RegisterUI onSubmit={handleSubmit}/>
        </Layout>
    )
}