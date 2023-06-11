import OtherDataSectionUI from './OtherDataSectionUI';
import { useEffect, useState} from "react";
import {URL} from '../../utils/url'

export default function OtherDataSection({userData}){
    
    const userId = userData.id_usuario;
    const [otherData, setOtherData] = useState([])
    useEffect(() => {
        if(userId){
            getOtherData(userId)
        }
    }, [userId])
    async function getOtherData(userId){
        await fetch(`${URL}/other_data/${userId}`,{
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },   
         }).then(async data => {
            if(data.status === 200){
                const otherDataInfo = await data.json()
                console.log(otherDataInfo)
                setOtherData(otherDataInfo)
            }
        })
    }
    
    
    return(
        <OtherDataSectionUI otherData={otherData}/>
    )
}