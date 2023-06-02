import ProfileSectionUI from "./ProfileSectionUI";
import { useState } from "react";
// import {URL} from '../../utils/url'

export default function ProfileSection({userData, setIsModalVisible}){
    const [inputValue, setInputValue] = useState(false);
    

    async function handleRecommend(){
        await fetch(`${URL}/recommend`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify()
        })
    }

    const handleOpenModal = () => {
        setIsModalVisible(true);
      };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Input value:', inputValue);
      };

    return (
        <ProfileSectionUI userData={userData} handleOpenModal={handleOpenModal} inputValue={inputValue} handleInputChange={handleInputChange} handleSubmit= {handleSubmit}/>
    )
}