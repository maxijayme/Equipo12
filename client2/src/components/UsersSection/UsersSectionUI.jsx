import UserCardUI from "../UserCard/UserCardUI"

export default function UsersSectionUI({allUsers}) {
    return (
        <div className="users_container d-flex flex-wrap">
            {
                allUsers.map((friend,i)=>{
                    return (<UserCardUI
                        userData = {friend}                     
                        key={i}
                    />)
                })
            }
        </div>
    )
}