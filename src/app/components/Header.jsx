import React from 'react'
import NavBar from './Navbar.jsx'
import Titulo from './Titulo.jsx'

export default function Header () {
  return (
    <header>
      <section>
        <Titulo />
      </section>
      <nav>
        <NavBar />
      </nav>
    </header>
  )
}
