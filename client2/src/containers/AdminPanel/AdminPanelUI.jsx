import AdminQuestions from '../../components/AdminMenu/AdminQuestions'
import AdminUserList from '../../components/AdminMenu/AdminUserList'
import './AdminPanel.css'


export default function AdminPanelUI({token,selectedOption, handleSelectOption}){
    return(
        <>  
            <div className="adminPanel-container row">
                <div className='adminPanel_sidebar col-2 d-flex flex-column'>
                    <button onClick={() => handleSelectOption('questions')}>Questions</button>
                    <button onClick={() => handleSelectOption('userList')}>User List</button>
                </div>
                <div className="content col">
                    {selectedOption === 'questions' && <AdminQuestions token={token} />}
                    {selectedOption === 'userList' && <AdminUserList token={token} />}
                </div>
            </div>
        </>
    )
}