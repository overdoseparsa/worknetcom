import React from 'react'
import Lottie from 'lottie-react'
import AnimationLoader from "../assets/SVG/lottieflow-radio-05-2-000000-easey.json"
import { Container } from 'react-bootstrap'
import "./loading.css"

export default function loading() {
  return (
    <Container className='p-0 loadingConatiner' fluid>
      <Lottie animationData={AnimationLoader} loop={true} style={{ width:50 , height:'100vh', margin:'0 auto'  }}/>
    </Container>
  )
}
