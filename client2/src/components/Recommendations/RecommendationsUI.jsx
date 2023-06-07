import './Recommendations.css';

export default function RecommendationsUI({recommendationList}) {
    return (
        <div className="container user_data p-3 mb-3">
            <h4>Recomendaciones</h4>
            <ul className='p-0'>
                {recommendationList.length>0?
                 recommendationList.map((r,i) =>(
                    <li key={i}>
                        <div className="recommendation_container p-3">
                            <p className='recommendation_username h5'>{r.fullname}:</p>
                            <p className='recommendation_text'>{r.recomendacion}</p>
                        </div>
                    </li>
                ))
                : <p>Aún no ha recibido recomendaciones</p>}
            </ul>
        </div>
    )
}
