import AdminPanelUI from "./AdminPanelUI";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Restricted from '../../components/Restricted'
export default function AdminPanel(){
    
    const token = JSON.parse(window.localStorage.getItem("jwt")).token
    const profile = JSON.parse(window.localStorage.getItem("jwt")).profile
    const URL = 'http://localhost:3001';
    const [questions, setQuestions] = useState(null)
    const navigate = useNavigate()

    const [restricted, setRestricted] = useState(false)

    useEffect(()=>{
        if(!token){
            navigate('/login')
        }
        // else if(profile !== 'admin'){
        //     setRestricted(true)
        //     setTimeout(()=>{
        //         navigate('/feed')
        //     }, 2000)
        // }
    },[])

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
        <>
        {
            !restricted ?
            <AdminPanelUI questions={questions} handleResponse = {handleResponse}/>
            : <Restricted/>
        }
        
        </>
    )
}