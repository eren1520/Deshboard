import React, { Component } from 'react'
import DanhLeft from '../DashLeft/DanhLeft'
import UserCard from '../Dung/UserCard'
import Header from '../Header/Header'
import Mailbox from '../QuanKu/Mailbox'
import FromElemoen from '../Toan/FromElemoen'

export default class FromElemoenPage extends Component {
  render() {
    return (
        <div className='grid grid-cols-5  '>
        <div className='col-span-1'>
            <DanhLeft />
        </div>

        <div className='col-span-4'>
            <Header />
            <FromElemoen/>
        </div>
    </div>
    )
  }
}
