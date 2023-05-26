import AdminPanelUI from "./AdminPanelUI";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Restricted from '../../components/Restricted'
import AppContext from "../../context/UsersContext";
<<<<<<< HEAD
export default function AdminPanel(){
    
    const {jwt} = useContext(AppContext)
    const token = true
    const profile = true
=======

export default function AdminPanel(){
    
    const {jwt} = useContext(AppContext)
    let token,profile;
    if(jwt != null) {
        token = JSON.parse(jwt).token;
        profile = JSON.parse(jwt).profile;
    } else {
        token = null;
        profile = null;
    }

>>>>>>> 897e7e3081cd0f8cca6d06e3426b2b23f8492854
    const URL = 'http://localhost:3001';
    const [questions, setQuestions] = useState(null)
    const navigate = useNavigate()
    console.log(jwt)
    const [restricted, setRestricted] = useState(false)

    useEffect(()=>{
<<<<<<< HEAD
        if(token == ){
            setRestricted(true)
            setTimeout(()=>{
                // navigate('/login')
            }, 2000)   
=======
        if(token === null){
            setRestricted(true)
            setTimeout(()=>{
                navigate('/login')
                }, 2000)
>>>>>>> 897e7e3081cd0f8cca6d06e3426b2b23f8492854
        }
        else if(profile !== 'admin'){
            setRestricted(true)
            setTimeout(()=>{
<<<<<<< HEAD
                // navigate('/feed')
=======
            navigate('/feed')
>>>>>>> 897e7e3081cd0f8cca6d06e3426b2b23f8492854
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