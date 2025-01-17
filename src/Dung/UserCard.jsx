import React, { Component } from 'react'
import { Title } from './UserCard/Title'
import { CardStyle } from './UserCard/CardStyle'
import { FadeInEffect } from './UserCard/Fade-inEffect'
import { ScrollDownEffect } from './UserCard/ScrollDownEffect'
import { ScrollUpEffect } from './UserCard/ScrollUpEffect'

export default class UserCard extends Component {
  render() {
    return (
      <div className='w-auto h-auto bg-[#1e2538]'>
        <Title></Title>
        <CardStyle></CardStyle>
        <FadeInEffect></FadeInEffect>
        <ScrollDownEffect></ScrollDownEffect>
        <ScrollUpEffect></ScrollUpEffect>
      </div>
    )
  }
}
