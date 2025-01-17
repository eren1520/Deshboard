import React, { Component } from 'react'
import DanhLeft from '../DashLeft/DanhLeft'
import UserCard from '../Dung/UserCard'
import Header from '../Header/Header'
import Calendar from '../VuLong/Calendar'
export default class CalenderPage extends Component {
  render() {
    return (
        <div className='grid grid-cols-5  '>
        <div className='col-span-1'>
            <DanhLeft />
        </div>

        <div className='col-span-4'>
            <Header />
            <Calendar/>
        </div>
    </div>
    )
  }
}
