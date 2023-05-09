import Image from 'next/image'
import '../styles/Mascarillas.css'
import Mascarilla1 from '../../../public/assets/MaskGranada.jpeg'
import Mascarilla2 from '../../../public/assets/MaskNaranja.jpeg'
import Mascarilla3 from '../../../public/assets/MaskManza.jpeg'
import Mascarilla4 from '../../../public/assets/MaskKiwi.jpeg'
import Mascarilla5 from '../../../public/assets/MaskBluebe.jpeg'

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
                    <div className='mask-container-img'>
                        <Image priority alt='mascarilla' className='mask-image' src={Mascarilla1} />
                    </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo granada'>Mascarilla de Granada</h3>
                        <h3 className='mask-main-beneficio granada'>Aclara y nutre</h3>
                        <p className='mask-beneficio granada'>Ayuda a cicatrizar la epidermis, ya que ayuda a producir colágeno y elastina. <br />
                        Se utiliza para tratar las enfermedades cutáneas como la psoriasis y el eccema, además de ser antiinflamatorias.</p>
                    </div>
                </div>
                <div className='mask-card two'>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla2} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo naranja'>Mascarilla de Naranja</h3>
                        <h3 className='mask-main-beneficio'>Hidrata e ilumina</h3>
                        <p className='mask-beneficio'>Exfolia la piel, dejándola con un efecto energizante. Exfoliante y Refrescante. Especial para piel grasa. Es ideal para refrescar tu piel y regenerarla.</p>
                    </div>
                </div>
                <div className='mask-card one'>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla3} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Manzana</h3>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                    </div>
                </div>
                <div className='mask-card two'>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla4} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Kiwi</h3>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                        <p className='mask-beneficio'>Hidrata la piel seca, ideal para tener una piel sedosa sin cicatrices, arrugas o manchas.</p>
                    </div>
                </div>
                <div className='mask-card one'>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla5} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Blueberry</h3>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                    </div>
                </div>
            </div>
        </section>
  )
}
