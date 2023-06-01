import Layout from "../../components/Layout/Layout"
import { useContext } from "react";
import FormUI from "./FormsUI";
import {URL} from '../../utils/url' 
import AppContext from "../../context/UsersContext";

export default function Form () {
    const {jwt} = useContext(AppContext)
    let idUser;
    if(jwt != null) {
        idUser=jwt.userId;
    } 
    const handleSubmit = async(values) => {
        const newValues = {...values}
        newValues.id = idUser
        await fetch(`${URL}/form`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newValues)
            }).then(data => {
                if(data.status === 200){
                    console.log(data)
                } else if (data.status === 400){
                    console.log('Error')
                }
        })
        await fetch(`${URL}/form`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newValues)
            }).then(data => {
                if(data.status === 200){
                    console.log('grabado')
                } else if (data.status === 400){
                    console.log('Error')
                }
        })
        
    }

    return (
        <Layout navbarOff={false}>
            < FormUI onSubmit={handleSubmit}/>
        </Layout>
    )
}