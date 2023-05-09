import '../styles/FQ.css'
import Link from 'next/link'

export default function FQ () {
  return (
        <div className='d'>
            <aside className='aside'>
            <h3 className='aside-titulo'>Preguntas Frecuentes</h3>
            <div className='aside-preguntas'>
              <div className='aside-div-pregunta'>
                <Link className='aside-pregunta' href='../mascarillas'>¿Qué tipo de mascarilla tiene?</Link>
              </div>
              <div className='aside-div-pregunta'>
                <Link className='aside-pregunta' href='../mascarillas'>¿Cómo se usa una mascarilla?</Link>
              </div>
              <div className='aside-div-pregunta'>
                <Link className='aside-pregunta' href='../mascarillas'>¿Qué beneficios hay al usar una mascarilla?</Link>
              </div>
              <div className='aside-div-pregunta'>
                <Link className='aside-pregunta' href='../mascarillas'>¿Cuántos tipos de mascarilla faciales existen?</Link>
              </div>
              <div className='aside-div-pregunta'>
                <Link className='aside-pregunta' href='../mascarillas'>¿Cuáles son los beneficios a la salud emocional al tener entre 15 y 20 minutos de cuidado facial?</Link>
              </div>
              <div className='aside-div-pregunta'>
                <Link className='aside-pregunta' href='../mascarillas'>¿Cuál es el objetivo de mi empresa?</Link>
              </div>
              <div className='aside-div-pregunta'>
                <Link className='aside-pregunta' href='../mascarillas'>¿Por qué nos diferenciamos en el mercado?</Link>
              </div>
            </div>

            </aside>
        </div>
  )
}
// ¿Qué tipo de mascarilla tiene?
// ¿Cómo se usa una mascarilla?
// ¿Qué beneficios hay al usar una mascarilla?
// ¿Cuántos tipos de mascarilla faciales existen?
// ¿Cuáles son los beneficios a la salud emocional al tener entre 15 y 20 minutos de cuidado facial?
