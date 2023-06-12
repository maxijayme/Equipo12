import OtherDataSectionUI from './OtherDataSectionUI';
import { useEffect, useState} from "react";
import {URL} from '../../utils/url'

export default function OtherDataSection({userData}){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const userId = userData.id_usuario;
    const [otherData, setOtherData] = useState([])
    useEffect(() => {
        if(userId){
            getOtherData(userId)
        }
    }, [userId])

    function handleOpenMorInfoModal(){
        setIsModalVisible(true)
    }

    function handleCloseModal(){
        setIsModalVisible(false)
    }

    async function getOtherData(userId){
        await fetch(`${URL}/other_data/${userId}`,{
            method: "get",
            headers: {
                "Content-Type": "application/json",
            },   
         }).then(async data => {
            if(data.status === 200){
                const otherDataInfo = await data.json()
                setOtherData(otherDataInfo)
            }
        })
    }
    
    
    return(
        <OtherDataSectionUI userData ={userData} otherData={otherData} isModalVisible={isModalVisible} handleCloseModal={handleCloseModal} handleOpenMorInfoModal={handleOpenMorInfoModal}/>
    )
}