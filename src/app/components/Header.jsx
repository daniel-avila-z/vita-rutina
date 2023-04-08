import React from 'react'
import NavBar from './Navbar'
import Titulo from './Titulo'

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
