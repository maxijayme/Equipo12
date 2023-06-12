import './Recommendations.css';

export default function RecommendationsUI({recommendationList}) {
    return (
        <div className='container mt-4 p-2' id='recommendation_container'>
            <h5 className='ms-3'>Recomendaciones</h5>
            <ul className='p-0'>
                {recommendationList.length>0?
                 recommendationList.map((r,i) =>(
                    <li key={i}>
                        <div className="recommendation_container row">
                            <div id="recommendation_division-line"></div>
                            <p className='recommendation_username h6 mt-2'>{r.fullname}</p>
                            <p className='recommendation_text'>{r.recomendacion}</p>
                        </div>
                    </li>
                ))
                : <p>Aún no ha recibido recomendaciones</p>}
            </ul>
        </div>
    )
}
