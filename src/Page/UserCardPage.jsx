import React, { Component } from 'react'
import DanhLeft from '../DashLeft/DanhLeft'
import UserCard from '../Dung/UserCard'
import Header from '../Header/Header'

export default class UserCardPage extends Component {
  render() {
          return (
              <div className='grid grid-cols-5  '>
                  <div className='col-span-1'>
                  <DanhLeft/>
                  </div>
                  
                  <div className='col-span-4'>
                      <Header/>
                      <UserCard/>
                  </div>
              </div>
          )
      }
}
