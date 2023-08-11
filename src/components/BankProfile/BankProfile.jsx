import React from 'react'
import './BankProfile.css'
import { columnTwo, dataSourceTwo } from '../../data'
import { Table } from 'antd';

function BankProfile() {


    return (

        <>
            <h3 className='bank-profile-h3'>BANK PROFILE COMPARISON</h3>


            <Table pagination={false} dataSource={dataSourceTwo} columns={columnTwo} />


        </>

    )
}

export default BankProfile
