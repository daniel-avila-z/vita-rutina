import './styles/globals.css'
import Header from './components/Header'
import Navbar from './components/Navbar'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <div className='header'>
          <Header />
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
