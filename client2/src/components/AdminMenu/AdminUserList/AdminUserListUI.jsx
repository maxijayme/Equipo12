import { CSVLink } from 'react-csv';
import Paginate from '../../Paginate';
import { useState } from 'react';

export default function AdminUserListUI({userList}){
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
        <div>
            <Paginate userList={userList} pagedUserList ={pagedUserList} setPagedUserList={setPagedUserList}/>
            <ul>
            {pagedUserList.length > 0 && pagedUserList.map(user =>(
                <li key={user.id_usuario}>
                    <p>{user.username}</p>
                    <p>{user.fullname}</p>
                    <p>{user.mail}</p>
                    <p>{user.phone}</p>
                    <p>{user.city}</p>
                    <p>{user.country}</p>
                    <p>{user.linkedin}</p>
                    <p>{user.nivel_estudios}</p>
                </li>
            ))}
            </ul>
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