import React from "react";
import './styles.css'

const Pagination = ({ prescriptionPerPage, totalPrescription, paginate }) => {
  const pageNumbers = [];
  let navNumb = 0
  for (
    let i = 1;
    i <= Math.ceil(totalPrescription / prescriptionPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }
  
  return (
    <div className='pagination'>
      {/* <span>&laquo;</span> */}
        {pageNumbers.map(number => (
          <span onClick={()=>paginate(number)} key={number} className='page-item'>
           {number}
          </span>
        ))}
         {/* <span>&laquo;</span> */}
    </div>
  );
};

export default Pagination;
