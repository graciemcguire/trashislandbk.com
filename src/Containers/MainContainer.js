import React, { Component, Fragment } from 'react'
import NavBar from '../Components/NavBar'
import Carousel from '../Components/Carousel'
import About from '../Components/About'
import EventCal from '../Components/EventCal'
import Store from '../Components/Store'
import Footer from '../Components/Footer'
import logo from '../logo.svg'

export default class MainContainer extends Component {
  render() {
    return(
      <Fragment>
        <img className='logo-main' src={ logo } alt='logo'/>

        <div className='main'>
          <h4>616 Halsey St Brooklyn</h4>
          <h4>hours: open</h4>
        </div>
      </ Fragment>
    )
  }
}
