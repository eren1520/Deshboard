import React, { Component } from 'react'
import DanhLeft from '../DashLeft/DanhLeft'
import Header from '../Header/Header'
import Mailbox from '../QuanKu/Mailbox'


export default class Blanh extends Component {
    render() {
        return (
             <div className='flex    '>
                 <div className=''>
                <DanhLeft/>
                 </div>
                
                 <div className=''>
                       <Mailbox/>

                 </div> 
                
            </div>
         )
    }
}
