import RecommendModalUI from "./RecommendModalUI";
import {useState, useEffect, useContext} from 'react';
import {URL} from '../../utils/url'
import AppContext from '../../context/UsersContext'

export default function RecommendedModal({handleCloseModal, userData}) {
    const [inputValue, setInputValue] = useState("");

    const {jwt} = useContext(AppContext)
  
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
          await fetch(`${URL}/recommendation`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
              msj:inputValue,
              recommendationUserId: jwt.userId,
              recommendatedUserId: userData.id_usuario
            })
          }).then( data => {
            if(data.status===200){
              handleCloseModal()
            }
          })
        }
        catch(e){ console.log(e)}
    };
    return (
        <>
          <RecommendModalUI inputValue={inputValue} handleCloseModal={handleCloseModal} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>  
        </>
    )
}
