import AdminPanelUI from "./AdminPanelUI";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Restricted from '../../components/Restricted'
import AppContext from "../../context/UsersContext";
import Layout from "../../components/Layout/Layout";

export default function AdminPanel(){
    
    const {jwt} = useContext(AppContext)
    let token,profile;
    if(jwt != null) {
        token = jwt.token;
        profile = jwt.profile;
    } else {
        token = null;
        profile = null;
    }
    const navigate = useNavigate()
    const [restricted, setRestricted] = useState(false)

    useEffect(()=>{
        if(token === null){
            setRestricted(true)
            setTimeout(()=>{
                navigate('/login')
            }, 2000)
        }
        // else if(profile !== 'admin'){
        //     setRestricted(true)
        //     setTimeout(()=>{
        //     navigate('/')
        //     }, 2000)
        // }
    },[])

    

    return(
        <>
        {
            !restricted ?
            <Layout>
                <AdminPanelUI token={token} />
            </Layout>
            : <Restricted/>
        }
        
        </>
    )
}