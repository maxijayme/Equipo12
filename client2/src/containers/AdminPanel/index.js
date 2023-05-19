import AdminPanelUI from "./AdminPanelUI";
import { useEffect, useState } from "react";
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY4NDQzMTI3NywiZXhwIjoxNjg0NTE3Njc3fQ.MP1aWFKi2-01l2AtN8iOZfXK2JdK-bW_aU1knZ1-kLU'

export default function AdminPanel(){
    const URL = 'http://localhost:3001';
    const [questions, setQuestions] = useState(null)

    async function handleResponse(data, id_consulta){
            await fetch(`${URL}/questions`,{
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `"Bearer ${token}"`
            },
            body: JSON.stringify({data, id_consulta})
            }).then(data => {
                if(data.status === 200){
                    getQuestions()
                }
            })
            
            
    }

    async function getQuestions(){
        await fetch(`${URL}/questions`,{
            method:'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": `"Bearer ${token}"`
            }
        }).then(
            questions => questions.json()
        ).then(
            res => setQuestions(res)
        )
    }
    useEffect(()=>{
        getQuestions()
    },[])

    return(
        <AdminPanelUI questions={questions} handleResponse = {handleResponse}/>
    )
}