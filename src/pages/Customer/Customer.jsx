import React from 'react'
import './Customer.css'
import ProfileIcon from "../../assets/Profile.png"
import FilterIcon from "../../assets/Filter.png"
import { Table } from 'antd';
import { columns, dataSource } from '../../data';
import BankProfile from '../../components/BankProfile/BankProfile';
import CaretContent from '../../components/CaretContent/CaretContent';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
function Customer() {

    const [searchQuery, setSearchQuery] = useState('');
    const [isbuttonClicked, setIsbuttonClicked] = useState({
        new: false,
        existing: true,
    });

    let [searchOpen, setSearchOpen] = useState(false);
    const [filteredData, setFilteredData] = useState(dataSource);

    // clear all search data
    const handleClear = () => {
        setSearchQuery('')
        setIsbuttonClicked({
            new: false,
            existing: true,
        });
    };
    const handleSearch = (query) => {
        const filtered = dataSource.filter((item) =>
            item.customerId.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
    };
    return (
        <div className='customers'>
            <h3>All Customers</h3>
            <div className="customer-filter-action">
                <div className="customer-left-col">
                    <div className="segment-col" onClick={() => setSearchOpen(prev => !prev)}>
                        <img src={ProfileIcon} alt="" />
                        <label htmlFor="">
                            Segment Customers
                        </label>

                        {searchOpen && <SearchBar
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            isbuttonClicked={isbuttonClicked}
                            setIsbuttonClicked={setIsbuttonClicked}
                            setSearchOpen={setSearchOpen}
                            onSearch={handleSearch} />}

                    </div>

                    <button className="clear-btn" onClick={handleClear}>Clear</button>
                </div>
                <div className="customer-right-col">
                    <img src={FilterIcon} alt="" />
                    <button className="sort">Sort</button>

                </div>
            </div>
            <Table dataSource={filteredData} columns={columns} />

            <BankProfile />
        </div>
    )
}

export default Customer