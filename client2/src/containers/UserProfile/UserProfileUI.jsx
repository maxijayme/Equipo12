import './UserProfile.css'
import ProfileSection from "../../components/ProfileSection";
import RecommendModal from '../../components/RecommendModal';
import ExperienceSection from "../../components/ExperienceSection";
import ProfilePostSection from "../../components/ProfilePostSection";
import UserDataModal from "../../components/UserDataModal"
import OtherDataSection from '../../components/OtherDataSection';
import EducationSection from '../../components/EducationSection';
import Recommendations from '../../components/Recommendations';
export default function UserProfileUI({userData, isModalVisible, setIsModalVisible, handleCloseModal,isEditVisible,setIsEditVisible,handleCloseEditModal}){
    
    return(
        <>
            < div className="row" id="profile_main_container">
                <div className="col-xl-3 col-md-2 col-sm-11 py-3 mb-3" id="profile_col_left">
                    <ProfileSection userData={userData} setIsModalVisible={setIsModalVisible} setIsEditVisible={setIsEditVisible}/>
                    <OtherDataSection userData={userData}/>
                    {isModalVisible && <RecommendModal handleCloseModal={handleCloseModal} userData={userData}/>}
                    {isEditVisible && <UserDataModal handleCloseEditModal={handleCloseEditModal} userData={userData}/>}
                    {window.location.pathname !=='/' && <Recommendations userData={userData}/>}
                </div>
                <div className="col-xl-5 col-md-7 col-sm-11" id="profile_col_cen">
                    <ProfilePostSection userData={userData}/>
                    
                </div>
                <div className="col-3" id="profile_col_right">
                    <ExperienceSection userData={userData}/>
                    <EducationSection userData={userData}/>
                    
                </div>
            </div>
        </>
    )
}