import Image from 'next/image'
import '../styles/Mascarillas.css'
import Mascarilla1 from '../../../public/assets/MaskGranada.jpeg'
import Mascarilla2 from '../../../public/assets/MaskNaranja.jpeg'
import Mascarilla3 from '../../../public/assets/MaskManza.jpeg'

export default function Mascarillas () {
  return (
        <section className='mask-main-container'>
            <div className='mask-titulo-container'>
                <h2 className='mask-main-title'>
                    🌟Mascarillas✨
                </h2>
            </div>
            <div className='mask-container'>
                <div className='mask-card one'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla1} />
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Granada</h3>
                        <h3 className='mask-main-beneficio'>Aclara y nutre</h3>
                    </div>
                </div>
                <div className='mask-card two'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla2} />
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Naranja</h3>
                        <h3 className='mask-main-beneficio'>Hidrata e ilumina</h3>
                    </div>
                </div>
                <div className='mask-card one'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla3} />
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Manzana</h3>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                    </div>
                </div>
                <div className='mask-card two'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla3} />
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Manzana</h3>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                    </div>
                </div>
            </div>
        </section>
  )
}
