import PaginateUI from "./PaginateUI";
import { useEffect, useState } from "react";

export default function Paginate({userList, pagedUserList, setPagedUserList}){

    const [ currentPage, setCurrentPage ] = useState(1);
    const [usersPerPage, ] = useState(5);
    
    useEffect(()=>{
        setPagedUserList(userList.slice(indexOfFirstUser,indexOfLastUser))
    }, [currentPage])
    const indexOfLastUser= currentPage * usersPerPage
    const indexOfFirstUser = indexOfLastUser - usersPerPage
    const totalPages = Math.ceil(userList.length / usersPerPage);
    const paginated = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const pages = [];   
    for(let i = 1; i <= Math.ceil(userList/usersPerPage); i++) {
        pages.push(i)
    };    

    function prevPage() {
        setCurrentPage(currentPage - 1);
    }
      
    function nextPage() {
        setCurrentPage(currentPage + 1);
    }
    return(
        <>
            <PaginateUI paginated={paginated} currentPage={currentPage} nextPage={nextPage} prevPage={prevPage} pages={pages} totalPages={totalPages}/>
        </>
    )
}