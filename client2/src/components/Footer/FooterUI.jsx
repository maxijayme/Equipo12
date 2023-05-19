import './Footer.css'

export default function FooterUI(){
    return(
        <>
            <div className="foot1">
                <ul>
                    <li>Meta</li>
                    <li>Información</li>
                    <li>Blog</li>
                    <li>Empleo</li>
                    <li>Ayuda</li>
                    <li>API</li>
                    <li>Privacidad</li>
                    <li>Condiciones</li>
                </ul>
            </div>
            <div className="foot2">
                <select className="language center_flex" name="language">
                    <option value="esp">Español</option>                
                    <option value="eng">Inglés</option>                
                    <option value="fr">Francés</option>                
                    <option value="deu">Alemán</option>
                </select>
                <p>&copy; 2023 Teclapedia</p>
            </div>        
        </>
    )
}