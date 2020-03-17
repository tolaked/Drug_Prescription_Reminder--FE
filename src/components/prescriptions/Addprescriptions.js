import React from 'react'
import Header from '../../reusables/Header.js'
import TopContent from './TopContent';
import AllCards from '../prescriptionCard/AllCards';

const Addprescriptions =()=> {
    return (
        <div>
            <Header/>
        <div className='right'>
        <TopContent/>
            <AllCards/>
        </div>
              </div>
    )
}

export default Addprescriptions
