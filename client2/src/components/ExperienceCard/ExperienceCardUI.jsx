import './ExperienceCard.css'

export default function ExperienceCardUI({job,company,tasks,init_date,finish_date,still}){
    return (
        <div className="experience_card_container ms-3 me-3 p-2 mb-3"> 
            <p className="h5 p-2">{job}</p>
            <p className="h6 px-2">{company}</p>
            <div className="experience_time px-2">
                <span className="me-2">{init_date}   ||   {still?'actualidad':finish_date}</span>
            </div>
            <p className="px-2 pt-2">{tasks}</p>
        </div>
    )
}