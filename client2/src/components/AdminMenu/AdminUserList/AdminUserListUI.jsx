import { CSVLink } from 'react-csv';
import Paginate from '../../Paginate';
import { useState } from 'react';
import './AdminUserList.css'

export default function AdminUserListUI({userList,deleteUser}){
    const headers = [
        { label: 'id', key: 'id_usuario' },
        { label: 'nombre completo', key: 'fullname' },
        { label: 'usuario', key: 'username' },
        { label: 'telefono', key: 'phone' },
        { label: 'email', key: 'email' },
        { label: 'linkedin', key: 'linkedin' },
        { label: 'ciudad', key: 'city' },
        { label: 'país', key: 'country' },
        { label: 'nivel de estudios', key: 'nivel_estudios' }
    ];
    const [pagedUserList, setPagedUserList] = useState([])
    return(
        <div className='m-3'>
            
            <Paginate userList={userList} pagedUserList ={pagedUserList} setPagedUserList={setPagedUserList}/>
            <table className="adminUserList_table table table-bordered">
                <thead>
                    <tr >
                        <th>Usuario</th>
                        <th>Nombre</th>
                        <th>Email</th>
                        <th>Teléfono</th>
                        <th>Ciudad</th>
                        <th>País</th>
                        <th>Linkedin</th>
                        <th>Nivel de estudios</th>
                    </tr>
                </thead>
                <tbody>
                    {pagedUserList.length > 0 && pagedUserList.map((user,i) => (
                        <tr key={i}>
                            <td className='userList_jail'>{user.username}</td>
                            <td>{user.fullname}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.city}</td>
                            <td>{user.country}</td>
                            <td>{user.linkedin}</td>
                            <td>{user.nivel_estudios}</td>
                            <td><button onClick={() => {deleteUser(user.id_usuario)}}>Eliminar</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <Paginate userList={userList} pagedUserList ={pagedUserList} setPagedUserList={setPagedUserList}/>
            <ul>
            {pagedUserList.length > 0 && pagedUserList.map(user =>(
                <li key={user.id_usuario}>
                    <p>{user.username}</p>
                    <p>{user.fullname}</p>
                    <p>{user.email}</p>
                    <p>{user.phone}</p>
                    <p>{user.city}</p>
                    <p>{user.country}</p>
                    <p>{user.linkedin}</p>
                    <p>{user.nivel_estudios}</p>
                </li>
            ))}
            </ul> */}
            <CSVLink
                data={userList}
                headers={headers}
                filename={'tabla.csv'}
                className="btn btn-primary"
                target="_blank"
            >
                Descargar CSV
            </CSVLink>
        </div>
    )
}