import './styles/globals.css'
import Header from './components/Header'
import Navigation from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head />
      <body>
        <div className='header'>
          <Header />
          <Navigation />
        </div>
        {children}
      </body>
    </html>
  )
}
