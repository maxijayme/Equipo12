import EducationSectionUI from "./EducationSectionUI";
import { useEffect, useState} from "react";
import {URL} from '../../utils/url'

export default function EducationSection({userData}){
    
    const userId = userData.id_usuario;
    const [educationList, setEducationList] = useState([])
    
    useEffect(() => {
        if(userId){
            getStudies(userId)
        }
    }, [userId])
    async function getStudies(userId){
        await fetch(`${URL}/studies/${userId}`,{
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },   
         }).then(async data => {
            if(data.status === 200){
                const studies = await data.json()
                setEducationList(studies)
            }
        })
    }
    
    return(
        <EducationSectionUI educationList={educationList}/>
    )
}