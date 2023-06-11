import UserDataModalUI from "./UserDataModalUI";
import {useState, useEffect, useContext} from 'react';
import AppContext from "../../context/UsersContext";
import {URL} from '../../utils/url'

export default function RecommendedModal({handleCloseEditModal, userData}) {
    const [fullnameValue, setFullnameValue] = useState(userData.fullname)
    const [phoneValue, setPhoneValue] = useState(userData.phone)
    const [emailValue,setEmailValue] = useState(userData.email)
    const [linkedinValue, setLinkedinValue] = useState(userData.linkedin)
    const [cityValue, setCityValue] = useState(userData.city)
    const [phoneErrorMessage, setPhoneErrorMessage] = useState("");
    const [emailErrorMessage, setEmailErrorMessage] = useState("");
    const [isValidForm, setIsValidForm] = useState(true)
    const {jwt} = useContext(AppContext);

    const handleDataInputChange = (fieldName, value) => {
        switch(fieldName) {
            case "fullname":
                setFullnameValue(value);
                break;
            case "phone":
                setPhoneValue(value);
                if (value.length !== 9) {
                    setPhoneErrorMessage("El número de teléfono debe tener 9 dígitos.")
                    setIsValidForm(false)
                } else {
                    setPhoneErrorMessage("")
                    setIsValidForm(true)
                }
                break;
            case "email":
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                setEmailValue(value);
                if (!emailRegex.test(value)) {
                    setEmailErrorMessage("El correo electrónico no es válido.")
                    setIsValidForm(false)
                }  else {
                    setEmailErrorMessage("")
                    setIsValidForm(true)
                }
                break;
            case "linkedin":
                setLinkedinValue(value);
                break;
            case "city":
                setCityValue(value);
                break;
            default:
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        
            try{
                await fetch(`${URL}/form/userData`,{
                  method: "POST",
                  headers: {
                      "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    fullname:fullnameValue,
                    phone:phoneValue,
                    email:emailValue,
                    linkedin:linkedinValue,
                    city:cityValue,
                    id:jwt.userId
                  })
                }).then( data => {
                  if(data.status===200){
                      handleCloseEditModal()
                  }
                })
              }
              catch(e){ console.log(e)}
        
        
    };

    return (
        <UserDataModalUI handleCloseEditModal={handleCloseEditModal} 
        userData={userData} 
        handleDataInputChange={handleDataInputChange} 
        fullnameValue={fullnameValue}
        phoneValue={phoneValue}
        emailValue={emailValue}
        linkedinValue={linkedinValue}
        cityValue={cityValue}
        handleSubmit={handleSubmit}
        phoneErrorMessage={phoneErrorMessage}
        emailErrorMessage={emailErrorMessage}
        isValidForm={isValidForm}/>
    )
}