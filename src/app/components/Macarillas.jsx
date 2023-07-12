import Image from 'next/image'
import '../styles/Mascarillas.css'
import Mascarilla1 from '../../../public/assets/MaskGranada.jpeg'
import Mascarilla2 from '../../../public/assets/MaskNaranja.jpeg'
import Mascarilla3 from '../../../public/assets/MaskManza.jpeg'
import Mascarilla4 from '../../../public/assets/MaskKiwi.jpeg'
import Mascarilla5 from '../../../public/assets/MaskBluebe.jpeg'
import brillo from '../../../public/assets/brillo-icono3.png'
import granada from '../../../public/assets/granada-icono.png'
import manzana from '../../../public/assets/manzana-verde.png'
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
                      <h3 className='mask-titulo granada'>Mascarilla de Granada <Image className='icono' src={granada} /></h3>
                    <div className='mask-container-img'>
                        <Image priority alt='mascarilla' className='mask-image' src={Mascarilla1} />
                    </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-main-beneficio granada'>Aclara y nutre</h3>
                        {/* <p className='mask-beneficio granada'>La granada tiene propiedades antioxidantes que combaten el envejecimiento celular y previenen el acné. Además, hidrata la piel seca e irritada gracias a su alto contenido en ácido punícico, un ácido graso que retiene la humedad. También oxigena las células de la piel y le da un aspecto jugoso y luminoso.</p> */}
                    </div>
                </div>
                <div className='mask-card manzana'>
                    <h3 className='mask-titulo'>Mascarilla de Manzana <Image className='icono' src={manzana} /></h3>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla3} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                        {/* <p className='mask-beneficio'>Nutre e hidrata las pieles secas y las suaviza en profundidad. Además, estimula la regeneración celular, desintoxica y revitaliza la piel. Gracias a la vitamina C, tiene una acción antioxidante y antiedad que protege la piel de los radicales libres y de la oxidación, que son los principales causantes del envejecimiento. La vitamina C también ilumina y aclara la piel, ayudando a unificar el tono y a conseguir una piel radiante. Se recomienda aplicar esta mascarilla especialmente antes de dormir para relajar la piel y una vez por semana si se quiere blanquear las manchas.</p> */}
                    </div>
                </div>
                <div className='mask-card naranja'>
                    <h3 className='mask-titulo'>Mascarilla de Naranja <Image className='icono' src={naranja} /></h3>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla2} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-main-beneficio'>Hidrata e ilumina</h3>
                        {/* <p className='mask-beneficio'>Es ideal para prevenir los signos del envejecimiento, es un antioxidante natural que aporta vitamina C a la piel. Además, contiene calcio, magnesio, ácido fólico y otros nutrientes beneficiosos para la salud cutánea. Esta mascarilla ayuda a eliminar el exceso de grasa en el rostro y aporta luminosidad y firmeza. Se recomienda aplicarla dos veces por semana durante 15 minutos (o menos si tienes la piel sensible) y realizar masajes faciales para estimular los músculos y evitar las arrugas de expresión.</p> */}
                    </div>
                </div>
                <div className='mask-card kiwi'>
                    <h3 className='mask-titulo'>Mascarilla de Kiwi  <Image className='icono' src={kiwi} /></h3>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla4} />
                </div>
                    <div className='mask-text-container '>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                        {/* <p className='mask-beneficio'>Hidrata la piel seca, ideal para tener una piel sedosa sin cicatrices, arrugas o manchas.</p> */}
                    </div>
                </div>
                <div className='mask-card blueberry'>
                    <h3 className='mask-titulo'>Mascarilla de Blueberry  <Image className='icono' src={blueberry} /></h3>
                <div className='mask-container-img'>
                    <Image priority alt='mascarilla' className='mask-image' src={Mascarilla5} />
                </div>
                    <div className='mask-text-container'>
                        <h3 className='mask-main-beneficio'>Hidrata y suaviza</h3>
                        {/* <p className='mask-beneficio'>Esta mascarilla es apta para cualquier edad, ya que tiene beneficios para resolver y prevenir problemas de la piel. Los arándanos contienen antioxidantes y propiedades antiinflamatorias por las antocianinas, un pigmento que mejora la salud de la piel. Estas sustancias favorecen la circulación sanguínea, lo que aporta oxígeno y nutrientes a la piel, dándole un aspecto saludable y radiante. La forma de aplicar esta mascarilla dependerá de si se quiere reparar o mantener la piel. En cualquier caso, no se recomienda usarla más de dos veces por semana.</p> */}
                    </div>
                </div>
            </div>
        </section>
  )
}
