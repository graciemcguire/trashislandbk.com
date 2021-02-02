import React, { Component, Fragment } from 'react'
import logo from '../logo.svg'
import palm from '../palm-top.svg'
import insta from '../insta.svg'
import email from '../email.svg'
import pdf from '../trashisland_menu.pdf';

export default class MainContainer extends Component {
  render() {
    console.log("Made with ❤️ by Gracie McGuire in 2019");
    console.log("github.com/graciemcguire 🏝");
    return(
      <Fragment>
        <div className='center-all'>
          <img className='palm-top' src={ palm } alt='palm leaf'/>
          <div className='center-main'>
            <img className='logo-main' src={ logo } alt='logo'/>

            <div className='main'>
              <h4>616 HALSEY ST</h4>
              <h4>BROOKLYN, NY 11233</h4>
              <h4>OPEN 8-5(ish) DAILY</h4>
              <br/>
              <h4><a className='menu' href= {pdf} target = "_blank">MENU</a></h4>
            </div>

              <a href="http://www.instagram.com/trashislandbk" target="_blank">
                <img className='link-images' src={ insta } alt='instagram'/>
              </a>
              <a href="mailto:trashislandbk@gmail.com">
                <img className='link-images' src={ email } alt='email'/>
              </a>
          </div>
        </div>
      </ Fragment>
    )
  }
}
