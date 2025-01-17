import React, { Component } from 'react'
import DanhLeft from '../DashLeft/DanhLeft'
import Header from '../Header/Header'
import UserCard from '../Dung/UserCard'
import Mail from '../QuanKu/components/Mail'
import Mailbox from '../QuanKu/Mailbox'
import FromElemoen from '../Toan/FromElemoen'
import Groupchats from '../DucKu/pages/Groupchats'


export default class Blanh extends Component {
    render() {
        return (
            <div className='grid grid-cols-5  '>
                <div className='col-span-1'>
                <DanhLeft/>
                </div>
                
                <div className='col-span-4  '>
                    <Header/>
                    <Groupchats/>
                </div>
            </div>
        )
    }
}
