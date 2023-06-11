export default function EducationCardUI({title,studiesCenter,init_date,finish_date,still}){
    return (
        <div className="experience_card_container ms-3 me-3 p-2 mb-3"> 
            <p className="h5 p-2">{title}</p>
            <p className="h6 px-2">{studiesCenter}</p>
            <div className="experience_time px-2">
                <span className="me-2">{init_date}   ||   {still?'actualidad':finish_date}</span>
            </div>
        </div>
    )
}