import React, { Component } from 'react'
import NavBar from '../Components/NavBar'
import Carousel from '../Components/Carousel'
import About from '../Components/About'
import EventCal from '../Components/EventCal'
import Store from '../Components/Store'
import Footer from '../Components/Footer'

export default class MainContainer extends Component {
  render() {
    return(
    <div className='main'>
      <h1>Trash Island</h1>
      <h4>616 Halsey St Brooklyn</h4>
      <h4>M-F 7 - 7</h4>
    </div>

    )
  }
}
