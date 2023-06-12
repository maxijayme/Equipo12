import ExperienceSectionUI from "./ExperienceSectionUI";

import { useEffect, useState} from "react";

import {URL} from '../../utils/url'

export default function ExperienceSection({userData}){
    
    const userId = userData.id_usuario;
    const [experiencesList, setExperiences] = useState([])
    
    useEffect(() => {
        if(userId){
            getExperiences(userId)
        }
    }, [userId])
    async function getExperiences(userId){
        await fetch(`${URL}/experience/${userId}`,{
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },   
         }).then(async data => {
            if(data.status === 200){
                const experiences = await data.json()              
                setExperiences(experiences)
            }
        })
    }
    
    return(
        <>
        {experiencesList.length>0 && experiencesList[0].puesto !== 'undefined' && <ExperienceSectionUI experiencesList={experiencesList}/>}
        </>
    
    )
}