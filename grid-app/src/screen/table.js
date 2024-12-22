import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Table = ({data = []}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [currentRecords, setCurrentRecords] = useState([]);
  const recordsPerPage = 5;
  const totalPages = Math.ceil(filteredData?.length / recordsPerPage);
  let lastIndex, firstIndex;

  useEffect(() => {
    let result = data;
    
    if (searchTerm) {
      result = result.filter(item =>
        Object.values(item).some(value =>
          value.toString().toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    setFilteredData(result);
    setCurrentPage(1); 
    lastIndex = currentPage * recordsPerPage;
    firstIndex = lastIndex - recordsPerPage;
    if(result && result?.length > 0){
        setCurrentRecords(result.slice(firstIndex, lastIndex));
    }
  }, [searchTerm, data]);

  useEffect(()=>{
    lastIndex = currentPage * recordsPerPage;
    firstIndex = lastIndex - recordsPerPage;
    setCurrentRecords(filteredData.slice(firstIndex, lastIndex));
  },[currentPage])

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prev => prev - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="table-container">      
      <div className="search-sort-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="table-wrapper">
        <table className="data-table">
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Percentage Funded</th>
              <th>Amount Pledged</th>
            </tr>
          </thead>
          <tbody>
            {currentRecords?.length > 0 ? currentRecords.map((record) => (
              <tr key={record?.["s.no"]}>
                <td>{record?.["s.no"]}</td>
                <td>{record?.["percentage.funded"]}%</td>
                <td className="amount-pledged">
                  ${record?.["amt.pledged"].toLocaleString()}
                </td>
              </tr>
            )):  
                <tr>
                <td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>
                No records found
                </td>
                </tr>}
          </tbody>
        </table>
        
        <div className="pagination-controls">
          <button
            onClick={previousPage}
            disabled={currentPage === 1}
            className="page-button"
          >
            <ChevronLeft size={16} />
          </button>
          
          <span className="page-info">
            {currentPage}/{totalPages || 1}
          </span>
          
          <button
            onClick={nextPage}
            disabled={currentPage >= totalPages}
            className="page-button"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;