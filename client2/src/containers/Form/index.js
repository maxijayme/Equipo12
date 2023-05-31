import Layout from "../../components/Layout/Layout"
import FormUI from "./FormsUI";
import {URL} from '../../utils/url' 

export default function Form () {
   
    const handleSubmit = async(values) => {
        // console.log(values)
         
        await fetch(`${URL}/form`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values)
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
            body: JSON.stringify(values)
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