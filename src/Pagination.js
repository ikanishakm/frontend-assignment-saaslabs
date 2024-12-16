import React from "react"
import "./pagination.css"

function Pagination({ currentPage, setCurrentPage, totalItems, itemsPerPage }) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  const getPaginationButtons = () => {
    // If total pages is 5 or less, show all pages
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, index) => index + 1)
    }

    // Logic for more than 5 pages
    const buttons = []

    // Always include first 3 pages
    if (currentPage <= 3) {
      buttons.push(1, 2, 3)
      buttons.push("...", totalPages)
    }
    // Always include last 3 pages
    else if (currentPage >= totalPages - 2) {
      buttons.push(1, "...")
      buttons.push(totalPages - 2, totalPages - 1, totalPages)
    }
    // Current page is in the middle
    else {
      buttons.push(1, "...")
      buttons.push(currentPage - 1, currentPage, currentPage + 1)
      buttons.push("...", totalPages)
    }

    return buttons
  }

  return (
    <div className="pagination-container">
      <button
        className="pagination-btn previous-btn"
        disabled={currentPage === 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        Previous
      </button>

      {getPaginationButtons().map((page, index) => (
        <button
          key={index}
          className={`pagination-btn page-btn ${
            page === currentPage ? "active" : page === "..." ? "ellipsis" : ""
          }`}
          onClick={() =>
            typeof page === "number" ? handlePageChange(page) : null
          }
          disabled={page === "..."}
        >
          {page}
        </button>
      ))}

      <button
        className="pagination-btn next-btn"
        disabled={currentPage === totalPages}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}

export default Pagination
