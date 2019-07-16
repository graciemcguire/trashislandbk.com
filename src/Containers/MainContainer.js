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
    <div>
      <NavBar />
      <Carousel />
      <About />
      <EventCal />
      <Store />
      <Footer />
    </div>

    )
  }
}
