import ProfileSection from "../../components/ProfileSection";
import RecommendModal from '../../components/RecommendModal'
export default function UserProfileUI({userData, isModalVisible, setIsModalVisible, handleCloseModal}){
    
    return(
        <>
            < div className="row" id="main_container">
                <ProfileSection userData={userData} setIsModalVisible={setIsModalVisible} />
                {isModalVisible && <RecommendModal handleCloseModal={handleCloseModal} userData={userData}/>}
            </div>
        </>
    )
}