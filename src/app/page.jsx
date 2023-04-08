import Header from './components/Header'
import Mascarillas from './components/Macarillas'
import Mockup from './components/Mockup'
// import EfectoEscritura from './components/EfectoEscritura'

export default function Home () {
  // const words = ['React', 'JavaScript', 'HTML', 'CSS']
  return (<>
    <Header />
    <main className=''>
      <div className='main-container'>
        <div>
          <h1>Te ofrecemos la mejor rutina para tu cuidado facial,</h1>
          <h2>con cremas 100% naturales</h2>
        </div>
        <Mockup />
      </div>
      <Mascarillas />
    </main>
  </>)
}

// import { Header } from './components/Header'
// import { Yo } from './components/Yo'
// import { Projects } from './components/Projects'
// // import Contact from '../components/Contact'
// import { Footer } from './components/Footer'
// import { Certificados } from './components/Certificados'
// import './styles/globals.css'

// export default function Home ({ children }) {
//   return (
//     <>
//       <Header />
//       <main>
//         <Yo />
//         <Projects />
//         <Certificados />
//         {children}
//         {/* <Contact/> */}
//         <Footer />
//       </main>

//     </>
//   )
// }
