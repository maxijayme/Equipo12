import AdminQuestions from '../../components/AdminMenu/AdminQuestions'
import AdminUserList from '../../components/AdminMenu/AdminUserList'
import './AdminPanel.css'


export default function AdminPanelUI({token}){
    return(
        <>
            <AdminQuestions token={token}/>
            <AdminUserList token={token}/>
        </>
    )
}