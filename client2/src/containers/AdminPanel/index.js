import AdminPanelUI from "./AdminPanelUI";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Restricted from '../../components/Restricted'
import AppContext from "../../context/UsersContext";
export default function AdminPanel(){
    
    const {jwt} = useContext(AppContext)
    const token = true
    const profile = true
    const URL = 'http://localhost:3001';
    const [questions, setQuestions] = useState(null)
    const navigate = useNavigate()
    console.log(jwt)
    const [restricted, setRestricted] = useState(false)

    useEffect(()=>{
        if(token == ){
            setRestricted(true)
            setTimeout(()=>{
                // navigate('/login')
            }, 2000)   
        }
        else if(profile !== 'admin'){
            setRestricted(true)
            setTimeout(()=>{
                // navigate('/feed')
            }, 2000)
        }
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