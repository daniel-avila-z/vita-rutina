import './styles/globals.css'
// import { Navigation } from './components/Navigation'
import { Titulo } from './components/Titulo'
// import Dropdown from './components/DropDown'
// import { links } from './components/Links'
import Toggle from './components/ChatGpt'
export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <Titulo />
        <Toggle />
        {children}

      </body>
    </html>
  )
}
