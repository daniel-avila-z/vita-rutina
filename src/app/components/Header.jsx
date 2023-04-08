import React from 'react'
import Navbar from './Navbar.jsx'
import Titulo from './Titulo.jsx'

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
