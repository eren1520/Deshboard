import React, { Component } from 'react'
import DanhLeft from '../DashLeft/DanhLeft'


export default class Blanh extends Component {
    render() {
        return (
            <div className='grid grid-cols-5  '>
                <DanhLeft/>
                <div className='"col-span-4'>3</div>

            </div>
        )
    }
}
