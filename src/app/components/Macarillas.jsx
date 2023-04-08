import Image from 'next/image'
import '../styles/Mascarillas.css'
import Mascarilla1 from '../../../public/assets/MaskGranada.jpeg'

export default function Mascarillas () {
  return (
        <section className='mask-main-container'>
            <div className='mask-titulo-container'>
                <h2 className='mask-main-title'>
                    🌟Mascarillas✨
                </h2>
            </div>
            <div className='mask-card'>
                <Image className='mask-image' src={Mascarilla1} />
                <div className='mask-text-container'>
                    <h3 className='mask-titulo'>Mascarilla de Granada</h3>
                    <h3 className='mask-main-beneficio'>Aclara y nutre</h3>
                    <h4 className='mask-beneficio'>Calma y protege, hidrata y humecta, mejora la aspereza de la piel y desprende luminosidad y suavidad en la piel.</h4>
                </div>
            </div>
        </section>
  )
}
