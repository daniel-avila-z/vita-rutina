import React from 'react'
import Navbar from './Navbar.jsx'
import Titulo from './Titulo'
import '../styles/Navbar.css'

export default function Header () {
  return (
    <header>
      <section>
        <Titulo />
      </section>
        <Navbar />
    </header>
  )
}
