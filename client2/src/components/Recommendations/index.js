import RecommendationsUI from "./RecommendationsUI"
import { URL } from "../../utils/url"
import { useEffect, useState } from "react";

export default function Recommendations({userData}) {
    
    const userId = userData.id_usuario;
    const [recommendationList, setRecommendationList] = useState([])
    useEffect(() => {
        if(userId){
            getRecommendatios(userId)
        }
    }, [userId])

    async function getRecommendatios(userId){
        try{
            await fetch(`${URL}/recommendation/${userId}`,{
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(async data => {
                if(data.status === 200){
                    const recommendations = await data.json()
                    setRecommendationList(recommendations)
                }
            })
        }
        catch(error){
            console.log(error)
        }
    }
    return (
        <>
            <RecommendationsUI recommendationList={recommendationList}/>
        </>
    )
}
