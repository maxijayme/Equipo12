import ProfileSectionUI from "./ProfileSectionUI";
import { useState } from "react";
// import {URL} from '../../utils/url'

export default function ProfileSection({userData, setIsModalVisible,setIsEditVisible}){
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

      const handleOpenDataModal = () => {
        setIsEditVisible(true);
      }

    return (
        <ProfileSectionUI userData={userData} handleOpenModal={handleOpenModal} handleOpenDataModal={handleOpenDataModal} inputValue={inputValue} handleInputChange={handleInputChange} handleSubmit= {handleSubmit}/>
    )
}