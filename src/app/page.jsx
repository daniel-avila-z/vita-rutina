// import Header from './components/Header'
// import Beneficios from './components/Beneficios'
import CopyPrincipal from './components/CopyPrincipal'
import FQ from './components/FQ'
import Mascarillas from './components/Macarillas'
import Mockup from './components/Mockup'
import CuidadoPiel from './components/CuidadoPiel'
// import VentajPsico from './components/VentajPsico'
// import EfectoEscritura from './components/EfectoEscritura'
import './styles/FQ.css'

export default function Home () {
  // const words = ['React', 'JavaScript', 'HTML', 'CSS']
  return (<>
    <main className=''>
      <div className='main-container'>
        <div className='copywriting-container'>
          <CopyPrincipal />
        </div>
        <Mockup />
      </div>
      <div className='container'>
          <Mascarillas />
          {/* <Beneficios /> */}
          <CuidadoPiel />
          {/* <VentajPsico />} */}
      </div>
      <FQ />
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
