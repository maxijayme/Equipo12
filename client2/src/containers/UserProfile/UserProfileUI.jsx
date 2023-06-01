import ProfileSection from "../../components/ProfileSection";
import RecommendModal from '../../components/RecommendModal'
export default function UserProfileUI({userData, isModalVisible, setIsModalVisible, handleCloseModal}){
    
    return(
        <>
         <ProfileSection userData={userData} setIsModalVisible={setIsModalVisible} />
         {isModalVisible && <RecommendModal handleCloseModal={handleCloseModal} userData={userData}/>}
        </>
    )
}