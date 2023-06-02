import Image from 'next/image'
import '../styles/Mascarillas.css'
import Mascarilla1 from '../../../public/assets/MaskGranada.jpeg'
import Mascarilla2 from '../../../public/assets/MaskNaranja.jpeg'
import Mascarilla3 from '../../../public/assets/MaskManza.jpeg'
import Mascarilla4 from '../../../public/assets/MaskKiwi.jpeg'
import Mascarilla5 from '../../../public/assets/MaskBluebe.jpeg'
import brillo from '../../../public/assets/brillo-icono3.png'
import granada from '../../../public/assets/granada-icono.png'
import manzana from '../../../public/assets/manzana-icono.png'
import naranja from '../../../public/assets/naranja-icono.png'
import kiwi from '../../../public/assets/kiwi-icono.png'
import blueberry from '../../../public/assets/blueberry-icono.png'

export default function Mascarillas () {
  return (
        <section className='mask-main-container'>
            <div className='mask-titulo-container'>
                <h2 className='mask-main-title'>
                <span className='icono-brillo'><Image className='image-brillo1' src={brillo} /></span> Mascarillas <span className='icono-brillo'><Image className='image-brillo2' src={brillo} /></span>
                </h2>
            </div>
            <div className='mask-container'>
                <div className='mask-card granada'>
                    <div className='mask-container-img'>
                        <Image priority alt='mascarilla' className='mask-image' src={Mascarilla1} />
                    </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo granada'>Mascarilla de Granada <Image className='icono' src={granada} /></h3>
                        <h3 className='mask-main-beneficio granada'>Aclara y nutre</h3>
                        <p className='mask-beneficio granada'>Ayuda a cicatrizar la epidermis, ya que ayuda a producir colágeno y elastina. <br />
                        Se utiliza para tratar las enfermedades cutáneas como la psoriasis y el eccema, además de ser antiinflamatorias.</p>
                    </div>
                </div>
                <div className='mask-card manzana'>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla3} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Manzana <Image className='icono' src={manzana} /></h3>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                        <p className='mask-beneficio'>La manzana verde tiene propiedades antienvejecimiento, ya que es rica en antioxidantes y vitaminas A, B y C, que ayudan a hidratar y reafirmar la piel del rostro.</p>
                    </div>
                </div>
                <div className='mask-card naranja'>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla2} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Naranja <Image className='icono' src={naranja} /></h3>
                        <h3 className='mask-main-beneficio'>Hidrata e ilumina</h3>
                        <p className='mask-beneficio'>Exfolia la piel, dejándola con un efecto energizante. Exfoliante y Refrescante. Especial para piel grasa. Es ideal para refrescar tu piel y regenerarla.</p>
                    </div>
                </div>
                <div className='mask-card kiwi'>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla4} />
                </div>
                    <div className='mask-text-container '>
                        <h3 className='mask-titulo'>Mascarilla de Kiwi  <Image className='icono' src={kiwi} /></h3>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                        <p className='mask-beneficio'>Hidrata la piel seca, ideal para tener una piel sedosa sin cicatrices, arrugas o manchas.</p>
                    </div>
                </div>
                <div className='mask-card blueberry'>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla5} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-titulo'>Mascarilla de Blueberry  <Image className='icono' src={blueberry} /></h3>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                        <p className='mask-beneficio'>Combatir los signos de envejecimiento, gracias a los antioxidantes y las vitaminas A y C que contienen los blueberries, que ayudan a neutralizar los radicales libres y prevenir el daño solar.</p>
                    </div>
                </div>
            </div>
        </section>
  )
}
