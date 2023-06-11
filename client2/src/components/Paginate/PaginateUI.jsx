export default function PaginateUI({pages, currentPage, totalPages, nextPage, prevPage, paginated}){
    console.log(pages)
    return(
        <div className="paged">  
            <button className="btn-slide prev" disabled={currentPage <= 1} onClick={prevPage}>
                <svg className="btn btn--prev" height="35" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"/>
                    <path d="M0-.5h24v24H0z" fill="none"/>
                </svg>
                PREV
            </button>             
            <nav className="numbers-container">
                {pages?.map(p =>(
                    <button className={p === currentPage ? "number-active" : "number"} onClick={() => paginated(p)} key={p} >{p}</button>
                ))}
            </nav>
            <button className="btn-slide next" disabled={currentPage >= totalPages} onClick={nextPage}>
                NEXT
                <svg className="btn btn--next" height="35" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"/>
                    <path d="M0-.25h24v24H0z" fill="none"/>
                </svg>
            </button>
        </div>
    )
}