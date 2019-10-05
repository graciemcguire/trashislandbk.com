import React, { Component, Fragment } from 'react'
import logo from '../logo.svg'
import palm from '../palm-top.svg'
import insta from '../insta.svg'
import email from '../email.svg'

export default class MainContainer extends Component {
  render() {
    return(
      <Fragment>
        <img className='palm-top' src={ palm } alt='palm leaf'/>
        <img className='logo-main' src={ logo } alt='logo'/>
        <div className='main'>
          <h4>616 HALSEY ST</h4>
          <h4>BROOKLYN, NY 11233</h4>
          <h4></h4>
          <h4>OPEN 8-8 DAILY</h4>

        </div>
          <a href="http://www.instagram.com/trashislandbk" target="_blank">
            <img className='link-images' src={ insta } alt='instagram'/>
          </a>
          <a href="mailto:trashislandbk@gmail.com">
            <img className='link-images' src={ email } alt='email'/>
          </a>
      </ Fragment>
    )
  }
}
