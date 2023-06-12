import AdminQuestions from '../../components/AdminMenu/AdminQuestions'
import AdminUserList from '../../components/AdminMenu/AdminUserList'
import './AdminPanel.css'


export default function AdminPanelUI({token,selectedOption, handleSelectOption}){
    return(
        <>  
            <div className="row" id="adminPanel_main_container">
                <div className='col-2 d-flex align-items-center justify-content-center ms-3' id='adminPanel_sidebar '>
                    <div className=' d-flex flex-column'>
                        <button className='mb-3 admin_button' onClick={() => handleSelectOption('questions')}>Consultas</button>
                        <button className="admin_button" onClick={() => handleSelectOption('userList')}>Administrar usuarios</button>
                    </div>
                </div>
                <div className="col m-3" id="adminPanel_content">
                    {selectedOption === 'questions' && <AdminQuestions token={token} />}
                    {selectedOption === 'userList' && <AdminUserList token={token} />}
                </div>
            </div>
        </>
    )
}