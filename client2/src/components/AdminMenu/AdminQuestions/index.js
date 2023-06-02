import {useEffect, useState} from "react";
import {URL} from '../../../utils/url' 
import AdminQuestionsUI from './AdminQuestionsUI'

export default function AdminQuestions({token}){
    
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
        <AdminQuestionsUI questions={questions}/>
    )
}