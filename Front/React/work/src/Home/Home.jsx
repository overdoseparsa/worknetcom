import React, { Component } from 'react'
import NavBar from "../navBar/navBar"
import InfoContainer from '../infoContainer/infoContainer'
import MainImage from '../mianImage/mainImage'
export default class Home extends Component {
  constructor() {
    super()

    this.state = {
      users: []
    }
  }
  render() {
    return (
      <>
        <NavBar />
        <MainImage />
        <InfoContainer/>
        <InfoContainer/>

      </>

    )
  }
}
