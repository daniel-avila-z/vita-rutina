import { NavBar } from "./Navbar"
import { Titulo } from "./Titulo"

export function Header () {
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
