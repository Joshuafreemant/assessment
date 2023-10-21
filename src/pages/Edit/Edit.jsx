import React from 'react'
import './Edit.css'
import EditHeader from "../../components/EditHeader/EditHeader";
import EditLeftBar from '../../components/EditLeftBar/EditLeftBar';
import Setup from '../../components/Setup/Setup';

function Edit() {
  return (
    <div className='edit'>
        <EditHeader/>
        <EditLeftBar/>
        <Setup/>
    </div>
  )
}

export default Edit