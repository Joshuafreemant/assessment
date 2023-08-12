import * as React from 'react';
import './Profile.css'
import { Collapse } from 'antd';

import { MinusIcon,PlusIcon } from '../../assets/Icons';


const { Panel } = Collapse;
function Profile() {


    return (
        <div className='profile'>
            <h3>PROFILE</h3>



            <Collapse className='accordion'
                expandIcon={({ isActive }) =>
                    isActive ? (
                        <div className='minus-icon'> <MinusIcon/></div>
                       
                    ) : (
                        
                        <div className='plus-icon'> <PlusIcon/></div>

                    )
                }
                accordion
            >
                <Panel header="Status" key="1">
                    41% of EGF Customers with the Bank are Dormant
                </Panel>
                <Panel header="Gender" key="2">
                    56% of EGF Customers with the Bank are Dormant

                </Panel>
                <Panel header="Age" key="3">
                    EGF Customers have an average of 56 Years

                </Panel>
                <Panel header="Loan Uptake" key="4">
                    5% of EGF Customers have taken a loan at some point

                </Panel>
                <Panel header="Tenure" key="5">
                    56% of EGF Customers with the Bank are Dormant

                </Panel>
            </Collapse>
        </div>
    )
}

export default Profile