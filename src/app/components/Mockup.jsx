import Image from 'next/image'
import Mascarilla from '../../../public/assets/MockupOfCreamsAndMask.png'
import '../styles/Mockup.css'
import React from 'react'

export default function Mockup () {
  return (
        <div className='mockup'>
            <Image priority src={Mascarilla} alt='mockup' />
        </div>
  )
}
