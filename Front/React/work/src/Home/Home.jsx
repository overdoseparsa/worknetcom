import React, { Component } from 'react'
import NavBar from "../navBar/navBar"
import { Container, Row, Col, Image, ButtonGroup, Table, Alert } from 'react-bootstrap'

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
        
      </>

    )
  }
}
