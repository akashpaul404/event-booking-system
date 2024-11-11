// src/components/Pagination.js

import React from 'react';
import '../css/pagination.css';

function Pagination({ totalEvents, eventsPerPage, currentPage, onPageChange }) {
  const totalPages = Math.ceil(totalEvents / eventsPerPage);

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={index + 1 === currentPage ? 'active' : ''}
        >
          {index + 1}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
