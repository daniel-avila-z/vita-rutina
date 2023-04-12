import Image from 'next/image'
import '../styles/TiposMask.css'
import FacialMaskRemoval from '../../../public/assets/Facial-Mask-PNG-Picture_clipdrop-background-removal.png'

export default function TiposMask () {
  return (
        <section className='tipos-main-container'>
            <div className='tipos-titulo-container'>
                <h2 className='tipos-main-title'>
                    Tipos de mascarillas <span><Image className='facial-mask' src={FacialMaskRemoval} /></span>
                </h2>
            </div>
            <div className='tipos-container'>
                <div className='tipos i'>
                    <h3>En polvo (caolín o la arcilla):</h3>
                    <p>Las sales y los principios activos que estas contienen, estimulan la circulación sanguínea produciendo un efecto refrescante y reafirmante (al evaporarse las sustancias líquidas de la loción (tónico)una loción descongestiva con azuleno. Para pieles acnéicas y grasas se usará una loción con azufre o que sea astringente.</p>
                </div>
                <div className='tipos s'>
                    <h3>Solida térmica:</h3>
                    <p>Una loción descongestiva con azuleno. Para pieles acnéicas y grasas se usará una loción con azufre o que sea astringente (este tipo de mascarillas tienen extractos de plantas ricas en azulino,descongestivas,antiinflamatorias y sedantes.</p>
                </div>
                <div className='tipos i'>
                    <h3>Pastosas:</h3>
                    <p> Se usan para piel y cabello y pueden incluir en su composición extractos de algas, sales, arcillas,zufre,elementos refrescantes...</p>
                </div>
                <div className='tipos s'>
                    <h3>Gel:</h3>
                    <p> Actúan reteniendo agua en la epidermis y tienen un efecto refrescante, suavizante y tonificando. (para píeles grasas) distintas acciones según sus componentes.</p>
                </div>
                <div className='tipos i'>
                    <h3>fango o barro termas:</h3>
                    <p> Este tipo de mascarillas también serían las de algas, aconsejables para tratamientos corporales, faciales y capilares.</p>
                </div>
                <div className='tipos s'>
                    <h3>Velo:</h3>
                    <p> Películas de celulosa embebida en colágeno, (aplicar sobre cara y escote) se humedece con un líquido activador especifico. y que permite transferir el colágeno puro desde el velo hasta la piel asegurando hidratación profunda y dando consistencia y elasticidad a los tejidos. Se utiliza especialmente como tratamiento de shock para pieles envejecidas y desvitalizadas y además para pieles deshidratadas.</p>
                </div>
                <div className='tipos i'>
                    <h3>Pastica fría:</h3>
                    <p> Compuesta por un polvo con sales. Al mezclarse ¾ partes de solución (tónico) y una de polvo, se polimeriza y se moldea acoplándose a la piel, se aplica rápidamente con espátula. Se deja actuar unos 20 minutos retirándolas de una sola pieza. Su acción principal es hidratante y acondicionadora, ya que la mezcla permite que la pasta retenga agua mientras se seca. De una zona de alta concentración de agua la mascarilla pasa a tener una baja concentración de agua por el proceso de ósmosis.</p>
                </div>
                <div className='tipos s'>
                    <h3>Peel-off:</h3>
                    <p> Minutos después de su aplicación se secan y se retiran de una pieza. Sirven para limpiar la zona T.</p>
                </div>
                <div className='tipos i'>
                    <h3>Batidos:</h3>
                    <p> Son aquellas mezclas caseras que unen ingredientes raros como harina de arroz, clara de huevo y miel para hacer un intento de tratamiento rejuvenecer milagroso y aplicarla sobre cutis maduro.</p>
                </div>
            </div>
        </section>
  )
}
