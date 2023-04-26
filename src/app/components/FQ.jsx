import '../styles/FQ.css'
import Link from 'next/link'

export default function FQ () {
  return (
        <div className='d'>
            <aside className='aside'>
            <h3 className='aside-titulo'>Preguntas Frecuentes</h3>
            <Link className='aside-pregunta' href='../mascarillas'>si</Link>
            </aside>
        </div>
  )
}
