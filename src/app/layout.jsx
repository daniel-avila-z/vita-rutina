import './styles/globals.css'
// import { Navigation } from './components/Navigation'
import { Titulo } from './components/Titulo'
// import Dropdown from './components/DropDown'
// import { links } from './components/Links'
import Toggle from './components/NavBar'
export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <header>
          <section>
            <Titulo />
          </section>
          <nav>
            <Toggle />
          </nav>
        </header>
        
        
        {children}

      </body>
    </html>
  )
}
