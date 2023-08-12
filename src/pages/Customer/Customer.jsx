import React from 'react'
import './Customer.css'
import { Table } from 'antd';
import { columns, dataSource } from '../../data';
import BankProfile from '../../components/BankProfile/BankProfile';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import { FilterIcon,ProfileIcon } from '../../assets/Icons';
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
                        <ProfileIcon width={19} height={20}/>
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
                    <FilterIcon/>
                    <button className="sort">Sort</button>

                </div>
            </div>
            <Table dataSource={filteredData} columns={columns} />

            <BankProfile />
        </div>
    )
}

export default Customer