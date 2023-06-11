import AdminPanelUI from "./AdminPanelUI";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Restricted from '../../components/Restricted'
import AppContext from "../../context/UsersContext";
import Layout from "../../components/Layout/Layout";

export default function AdminPanel(){
    const [selectedOption, setSelectedOption] = useState('questions');
    const navigate = useNavigate()
    const [restricted, setRestricted] = useState(false)
    const {jwt} = useContext(AppContext)
    let token,profile;
    if(jwt != null) {
        token = jwt.token;
        profile = jwt.profile;
    } else {
        token = null;
        profile = null;
    }
    console.log(jwt)

    useEffect(()=>{
        if(token === null){
            setRestricted(true)
            setTimeout(()=>{
                navigate('/login')
            }, 2000)
        }
        else if(profile !== 'admin'){
            setRestricted(true)
            setTimeout(()=>{
            navigate('/')
            }, 2000)
        }
    },[])

    const handleSelectOption = (option) => {
        setSelectedOption(option);
      };

    return(
        <>
        {
            !restricted ?
            <Layout>
                <AdminPanelUI token={token} selectedOption={selectedOption} handleSelectOption={handleSelectOption}/>
            </Layout>
            : <Restricted/>
        }
        
        </>
    )
}