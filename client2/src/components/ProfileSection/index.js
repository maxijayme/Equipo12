import ProfileSectionUI from "./ProfileSectionUI";
import {URL} from '../../utils/url'
export default function ProfileSection({userData}){

    async function handleRecommend(){
        await fetch(`${URL}/recommend`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(form)
        })
    }

    return <ProfileSectionUI userData={userData}/>
}