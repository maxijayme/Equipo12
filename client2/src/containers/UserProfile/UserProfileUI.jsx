import './UserProfile.css'
import ProfileSection from "../../components/ProfileSection";
import RecommendModal from '../../components/RecommendModal';
import ExperienceSection from "../../components/ExperienceSection";
import ProfilePostSection from "../../components/ProfilePostSection";
import Recommendations from '../../components/Recommendations';
export default function UserProfileUI({userData, isModalVisible, setIsModalVisible, handleCloseModal}){
    
    return(
        <>
            < div className="row" id="profile_main_container">
                <div className="col-xl-2 col-md-3 col-sm-11 py-3 mb-2" id="profile_col_left">
                    <ProfileSection userData={userData} setIsModalVisible={setIsModalVisible} />
                    {isModalVisible && <RecommendModal handleCloseModal={handleCloseModal} userData={userData}/>}
                    {window.location.pathname !=='/' && <Recommendations userData={userData}/>}
                </div>
                <div className="col-xl-5 col-md-5 col-sm-11" id="profile_col_cen">
                    <ProfilePostSection userData={userData}/>
                    
                </div>
                <div className="col-3" id="profile_col_right">
                    <ExperienceSection userData={userData}/>
                </div>
            </div>
        </>
    )
}