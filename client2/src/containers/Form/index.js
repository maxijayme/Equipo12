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
                    console.log('Erroooor')
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
                    console.log('Erroooor')
                }
        })
        
    }

    return < FormUI onSubmit={handleSubmit}/>
}