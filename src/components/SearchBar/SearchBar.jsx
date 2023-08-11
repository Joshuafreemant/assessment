import React from 'react'
import './SearchBar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';

function SearchBar({ searchQuery, setSearchQuery, isbuttonClicked, setIsbuttonClicked, onSearch, setSearchOpen }) {
    


    const handleSearch = () => {

        onSearch(searchQuery);
        setSearchOpen(false)
    };
    const handleExisting = () => {
        setIsbuttonClicked({
            existing: true,
            new: false,
        });

    }
    const handleNew = () => {
        setIsbuttonClicked({
            new: true,
            existing: false,
        });
    }


    return (
        <div className='searchDiv' onClick={(e) => e.stopPropagation()}>
            <h5>Customer ID</h5>
            <div className='input-group'>
                <input
                    type="text"
                    className='search-field'
                    placeholder='Input Customer ID'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <div className='select-group'>
                    <label htmlFor="">Select</label>
                    <div className="select-btn-groups">
                        <div className="btn-groups">
                            <button className={isbuttonClicked.existing ? 'round-btns' : 'round-btn'} onClick={() => handleExisting()}></button>
                            <label htmlFor="">Existing</label>
                        </div>
                        <div className="btn-groups">
                            <button className={isbuttonClicked.new ? 'round-btns' : 'round-btn'} onClick={() => handleNew()}></button>
                            <label htmlFor="">New</label>
                        </div>
                    </div>

                </div>

                {
                    isbuttonClicked.new &&
                    <>
                        {
                            isbuttonClicked.new && (isbuttonClicked.new && searchQuery !== '') ? <button className='search-btn' onClick={handleSearch}>Add New Customer</button> : <button className='inactive-btn'>Add New Customer</button>
                        }
                    </>
                }



                {
                    isbuttonClicked.existing &&
                    <>
                        {

                            (isbuttonClicked.existing && searchQuery !== '') ? <button className='search-btn' onClick={handleSearch}>Search</button> : <button className='inactive-btn' >Search</button>
                        }
                    </>
                }

            </div>
        </div>
    )
}

export default SearchBar