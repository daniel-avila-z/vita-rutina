// import Header from './components/Header'
import Beneficios from './components/Beneficios'
import FQ from './components/FQ'
import Mascarillas from './components/Macarillas'
import Mockup from './components/Mockup'
import VentajPsico from './components/VentajPsico'
// import EfectoEscritura from './components/EfectoEscritura'
import './styles/FQ.css'

export default function Home () {
  // const words = ['React', 'JavaScript', 'HTML', 'CSS']
  return (<>
    <main className=''>
      <div className='main-container'>
        <div className='copywriting-container'>
          <h1></h1>
          <h2>Nuestras mascarillas son fáciles de aplicar, cómodas de usar y muy efectivas.</h2>
          <h2>Solo tienes que elegir la que mejor se ajuste a tus necesidades y disfrutar de un momento de relax mientras tu piel se nutre y se regenera.</h2>
          <h2> En pocos minutos, notarás la diferencia: una piel más suave, luminosa y saludable.</h2>
        </div>
        <Mockup />
      </div>
      <div className='container-con-aside'>
        <div className='i'>
          <Mascarillas />
          <Beneficios />
          <VentajPsico />
        </div>
        <FQ />
      </div>

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
