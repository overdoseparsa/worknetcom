import React from 'react'
import { Link } from 'react-router-dom'

export default function home() {
  return (
    <div>home
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore accusamus aspernatur, architecto qui temporibus beatae ratione officia dignissimos 
    dolorum deserunt iure facere quisquam ut, adipisci, amet nam rem hic veniam!
    <br />
    <Link to={'/'}>home</Link>
    <br />
    <Link to={'/Aboute'}>aboute</Link>
    <br />
    <Link to={'/Service'}>Service</Link>
    </div>
  )

}
