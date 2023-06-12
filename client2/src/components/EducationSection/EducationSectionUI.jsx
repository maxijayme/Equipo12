import EducationCardUI from "../EducationCard/EducationCardUI"

export default function EducationSectionUI({educationList}){
    return(
        <section className="experience_container">
            <p className="h4 p-3">Estudios</p>
            {
                 educationList.map((study,i)=>{
                    return (<EducationCardUI
                        title={study.titulo}
                        studiesCenter={study.centro}
                        init_date={study.f_inicio}
                        finish_date={study.f_fin}
                        still={study.actualidad}
                        key={i}                        
                    />)
                })
            }
        </section>
    )
}