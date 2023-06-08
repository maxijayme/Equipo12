import PaginateUI from "./PaginateUI";

export default function Paginate({userList,usersPerPage, setCurrentPage, currentPage}){
    
    const paginated = (pageNumber)=>{
        setCurrentPage(pageNumber)
    }
    const totalPages = Math.ceil(userList.length / usersPerPage);

    const pages = [];   
    for(let i = 1; i <= Math.ceil(userList.length/usersPerPage); i++) {
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