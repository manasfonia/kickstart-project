import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react';

const Table = ({ data = [], loader }) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [currentRecords, setCurrentRecords] = useState([]);
    const recordsPerPage = 5;
    const totalPages = Math.ceil(filteredData?.length / recordsPerPage);
    let lastIndex, firstIndex;

    useEffect(() => {
        let result = data;
        const trimmedSearch = searchTerm?.trim();
        if (trimmedSearch) {
            if (trimmedSearch) {
                result = result.filter(item => {
                    const itemValues = Object.values(item).map(value =>
                        value.toString().trim()
                    );
                    if (!isNaN(trimmedSearch)) {
                        return itemValues.some(value => value === trimmedSearch);
                    }
                    return itemValues.some(value =>
                        value.toLowerCase().includes(trimmedSearch.toLowerCase())
                    );
                });
            }
        }
        setFilteredData(result);
        setCurrentPage(1);
        lastIndex = currentPage * recordsPerPage;
        firstIndex = lastIndex - recordsPerPage;
        if (result && result?.length > 0) {
            setCurrentRecords(result.slice(firstIndex, lastIndex));
        }
        else {
            setCurrentRecords([]);
        }
    }, [searchTerm, data]);

    useEffect(() => {
        lastIndex = currentPage * recordsPerPage;
        firstIndex = lastIndex - recordsPerPage;
        setCurrentRecords(filteredData.slice(firstIndex, lastIndex));
    }, [currentPage])

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
                    className={loader ? "search-input-disable" : "search-input"}
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    disabled={loader}
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
                        )) :
                            <tr>
                                <td colSpan="3" style={{ textAlign: 'center', padding: '20px' }}>
                                    {
                                        loader ?
                                            <div className="spinner-container">
                                                <Loader2 className="spinner-icon" />
                                                <div>Loading</div>
                                            </div>
                                            : <span>No records found</span>
                                    }
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