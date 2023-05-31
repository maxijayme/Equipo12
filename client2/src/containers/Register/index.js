import Layout from "../../components/Layout/Layout"
import RegisterUI from "./RegisterUI"
import {URL} from '../../utils/url' 

export default function Register(){
    
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
                    console.log('El email ya está en uso')
                    //emailLabel.innerHTML = 'El email ya está en uso';
                    //exist = false;
                }
                if(responseJson.dataUserName){
                    console.log('El usuario ya está en uso')
                    //userNameLabel.innerHTML = 'El usuario ya está en uso';
                    //exist = false;
                } 
            } else {
                console.log('todo ok')
            }
        } catch (error) {
            console.error("Error:", error);
        }

        // Este para crear después el nuevo usuario
        // await fetch(`${URL}/register`,{
        //     method: "POST",
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(values)
        //     }).then(data => {
        //         if(data.status === 200){
        //             console.log(data)
        //         } else if (data.status === 400){
        //             console.log('Error')
        //         }
        // })
    }
    
    return(
        <Layout navbarOff={false}>
            <RegisterUI onSubmit={handleSubmit}/>
        </Layout>
    )
}