import Layout from "../../components/Layout/Layout"
import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import FormUI from "./FormsUI";
import {URL} from '../../utils/url' 
import AppContext from "../../context/UsersContext";

export default function Form () {
    const navigate = useNavigate()
    const {jwt} = useContext(AppContext)
    const [url, updateUrl] = useState("../img/avatar.jpg");
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
                    navigate('/')
                } else if (data.status === 400){
                    console.log('Error')
                }
        })
        
    }

    function handleOnUpload(error, result, widget) {
        if ( error ) {

          widget.close({
            quiet: true
          });
          return;
        }
        updateUrl(result?.info?.secure_url);
      }

    return (
        <Layout navbarOff={false}>
            < FormUI onSubmit={handleSubmit} handleOnUpload={handleOnUpload} url={url}/>
        </Layout>
    )
}