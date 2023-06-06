
export default function RecommendationsUI({recommendationList}) {
    return (
        <div className="container user_data p-3 mb-3">
            <h4>Recomendaciones</h4>
            <ul>
                {recommendationList.length>0?
                 recommendationList.map((r,i) =>(
                    <li key={i}>
                        <div>
                            <p>{r.fullname}</p>
                            <p>{r.recomendacion}</p>
                        </div>
                    </li>
                ))
                : <p>Aún no ha recibido recomendaciones</p>}
            </ul>
        </div>
    )
}
