import ProfileSection from "../../components/ProfileSection/ProfileSectionUI";
export default function UserProfileUI({username, userData}){
    return(
        <>
        <ProfileSection userData={userData}/>
        </>
    )
}