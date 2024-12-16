import React, { useEffect, useState } from "react"
import "./styles.css"
import TableComponent from "./Table"
import Pagination from "./Pagination"
import ItemsPerPageSelect from "./ItemsSelected"

function App() {
  const [fetchedData, setFetchedData] = useState([])
  const [currentPageData, setCurrentPageData] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json"
        )
        if (!response.ok) {
          throw new Error("Failed to fetch data")
        }
        const data = await response.json()
        setFetchedData(data)

        setCurrentPage(1)
        const startIndex = 0
        const endIndex = itemsPerPage
        setCurrentPageData(data.slice(startIndex, endIndex))
      } catch (e) {
        setError(e.message)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    const updatePageData = () => {
      if (fetchedData.length) {
        const startIndex = (currentPage - 1) * itemsPerPage
        const endIndex = startIndex + itemsPerPage
        setCurrentPageData(fetchedData.slice(startIndex, endIndex))
      }
    }

    updatePageData()
  }, [currentPage, itemsPerPage, fetchedData])

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = Number(e.target.value)
    setItemsPerPage(newItemsPerPage)
    setCurrentPage(1)
  }

  return (
    <main>
      {error ? (
        <p className="error">Error: {error}</p>
      ) : (
        <div className="tableContainer">
          <ItemsPerPageSelect
            itemsPerPage={itemsPerPage}
            handleItemsPerPageChange={handleItemsPerPageChange}
          />
          <TableComponent data={currentPageData} />
          <div className="paginationContainer">
            <Pagination
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalItems={fetchedData.length}
              itemsPerPage={itemsPerPage}
            />
          </div>
        </div>
      )}
    </main>
  )
}

export default App
