import ExperienceCardUI from '../ExperienceCard/ExperienceCardUI'

export default function ExperienceSectionUI({experiencesList}){
    return(
        <section className="experience_container">
            <p className="h4 p-3">Experiencia laboral</p>
            {
                experiencesList.length>0?
                experiencesList.map((experience,i)=>{
                    return (<ExperienceCardUI
                        job={experience.puesto}
                        company={experience.empresa}
                        tasks={experience.funciones}
                        init_date={experience.f_inicio}
                        finish_date={experience.f_fin}
                        still={experience.actualidad}
                        key={i}                        
                    />)
                })
                : <p className='ps-3'>
                    Aún no hay datos laborales
                </p>
            }
        </section>
    )
}