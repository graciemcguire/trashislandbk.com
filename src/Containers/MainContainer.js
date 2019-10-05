import React, { Component, Fragment } from 'react'
import NavBar from '../Components/NavBar'
import Carousel from '../Components/Carousel'
import About from '../Components/About'
import EventCal from '../Components/EventCal'
import Store from '../Components/Store'
import Footer from '../Components/Footer'
import logo from '../logo.svg'
import palm from '../palm-top.svg'

export default class MainContainer extends Component {
  render() {
    return(
      <Fragment>
        <img className='palm-top' src={ palm } alt='palm leaf'/>
        <img className='logo-main' src={ logo } alt='logo'/>
        <div className='main'>
          <h4>616 HALSEY ST BROOKLYN, NY 11233</h4>
          <h4></h4>
          <h4>OPEN 8-8 DAILY</h4>
          <a href="mailto:trashislandbk@gmail.com">email< /a>
        </div>
      </ Fragment>
    )
  }
}
