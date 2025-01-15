import React, { Component } from 'react'
import NavBar from "../navBar/navBar"
import infoContainer from '../infoContainer/infoContainer'

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
        <infoContainer/>
      </>

    )
  }
}
