import React, { Component } from 'react'
import DanhLeft from '../DashLeft/DanhLeft'
import Header from '../Header/Header'


export default class Blanh extends Component {
    render() {
        return (
            <div className='grid grid-cols-5  '>
                <div className='col-span-1'>
                <DanhLeft/>
                </div>
                
                <div className='col-span-4'>
                    <Header/>
                    
                </div>
            </div>
        )
    }
}
