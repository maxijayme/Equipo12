import {Link} from 'react-router-dom'
export default function ErrorUI() {
    return (
        <div className=".container">
            <div className="row">
                <h2 className="mt-3 text-center">Página web no encontrada</h2>
            </div>
            <div className="row justify-content-center">
                    <img className="col-6 " src="./img/404.gif" alt="Page not found" />
            </div>
            <div className="row">
                <Link className='d-flex justify-content-center' to={"./"}>
                    <button className="btn btn-warning" style={{width: "200px"}}>Llevame al inicio</button>
                </Link>
            </div>
        </div>
    )
}
