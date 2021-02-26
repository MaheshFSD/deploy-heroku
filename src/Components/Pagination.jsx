import React from "react"

function Pagination({totalPages,currentPage,handleChangePage}){
    let btns = new Array(totalPages).fill(0).map((a,i)=><button onClick={()=>handleChangePage(i+1)} disabled={currentPage === i+1} key={i} >{i+1}</button>)

return <div>{btns}</div>
}
export default Pagination