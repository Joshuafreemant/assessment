import React from 'react'
import './Conditions.css'
import EditHeader from "../../components/EditHeader/EditHeader";
import EditLeftBar from '../../components/EditLeftBar/EditLeftBar';
import Setup from '../../components/Setup/Setup';
import SetCondition from '../../components/SetCondition/SetCondition';

function Conditions() {
  return (
    <div className='cond'>
        <EditHeader/>
        <EditLeftBar/>
        <SetCondition/>
    </div>
  )
}

export default Conditions