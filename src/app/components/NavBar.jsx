'use client'
// import React, { useState } from 'react'
import '../styles/Navbar.css'

// const Toggle = () => {
//   const [activeCategory, setActiveCategory] = useState('mascarillas')
//   const [activeSubCategory, setActiveSubCategory] = useState('')

//   const handleCategoryClick = (category) => {
//     if (activeCategory === category) {
//       setActiveCategory('')
//       setActiveSubCategory('')
//     } else {
//       setActiveCategory(category)
//       setActiveSubCategory('')
//     }
//   }

//   const handleSubCategoryClick = (subCategory) => {
//     setActiveSubCategory(subCategory)
//   }

//   return (
//     <div className='toggle-container'>
//       <div className='toggle-category'>
//         <h3 onClick={() => handleCategoryClick('mascarillas')}>Mascarillas</h3>
//         {activeCategory === 'mascarillas' && (
//           <ul className='toggle-subcategories'>
//             <li onClick={() => handleSubCategoryClick('en polvo')}>En polvo</li>
//             <li onClick={() => handleSubCategoryClick('en crema')}>En crema</li>
//           </ul>
//         )}
//       </div>
//       <div className='toggle-category'>
//         <h3 onClick={() => handleCategoryClick('productos')}>Productos</h3>
//         {activeCategory === 'productos' && (
//           <ul className='toggle-subcategories'>
//             <li onClick={() => handleSubCategoryClick('cremas')}>Cremas</li>
//             <li onClick={() => handleSubCategoryClick('pinturas')}>Pinturas</li>
//           </ul>
//         )}
//         {activeSubCategory === 'pinturas' && (
//           <ul className='toggle-sub-subcategories'>
//             <li onClick={() => handleSubCategoryClick('labios')}>Labios</li>
//             <li onClick={() => handleSubCategoryClick('uñas')}>Uñas</li>
//           </ul>
//         )}
//       </div>
//     </div>
//   )
// }

// export default Toggle

import React, { useState } from 'react'
import Link from 'next/link'

export default function Navbar () {
  const [activeCategory, setActiveCategory] = useState('')
  const [activeSubCategory, setActiveSubCategory] = useState('')

  const handleCategoryClick = (category) => {
    if (activeCategory === category) {
      setActiveCategory('')
      setActiveSubCategory('')
    } else {
      setActiveCategory(category)
      setActiveSubCategory('')
    }
  }

  const handleSubCategoryClick = (subCategory) => {
    setActiveSubCategory(subCategory)
  }

  return (
    <div className='toggle-container'>
      <div className='toggle-category'>
        <h3 onClick={() => handleCategoryClick('mascarillas')}>Mascarillas</h3>
        {activeCategory === 'mascarillas' && (
          <ul className='toggle-subcategories'>
            <li>
              <Link href='/mascarillas/en-polvo' legacyBehavior>
                En Polvo
              </Link>
            </li>
            <li>
              <Link href='/mascarillas/en-crema' legacyBehavior>
                En Crema
              </Link>
            </li>
            <li>
              <Link href='/mascarillas/en-crema' legacyBehavior>
                Solida Térmica
              </Link>
            </li>
            <li>
              <Link href='/mascarillas/en-crema' legacyBehavior>
                Pastosas
              </Link>
            </li>
            <li>
              <Link href='/mascarillas/en-crema' legacyBehavior>
                En Gel
              </Link>
            </li>
            <li>
              <Link href='/mascarillas/en-crema' legacyBehavior>
                Fango o Barro Termas
              </Link>
            </li>
            <li>
              <Link href='/mascarillas/en-crema' legacyBehavior>
                Velo
              </Link>
            </li>
            <li>
              <Link href='/mascarillas/en-crema' legacyBehavior>
                Pastica Fría
              </Link>
            </li>
            <li>
              <Link href='/mascarillas/en-crema' legacyBehavior>
                Peel-off
              </Link>
            </li>
            <li>
              <Link href='/mascarillas/en-crema' legacyBehavior>
                Batidos
              </Link>
            </li>
          </ul>
        )}
      </div>
      <div className='toggle-category'>
        <h3 onClick={() => handleCategoryClick('productos')}>Productos</h3>
        {activeCategory === 'productos' && (
          <ul className='toggle-subcategories'>
            <li>
              <Link href='/productos/cremas'>
                Cremas
              </Link>
            </li>
            <li onClick={() => handleSubCategoryClick('pinturas')}>
              Pinturas
            </li>
          </ul>
        )}
        {activeSubCategory === 'pinturas' && (
          <ul className='toggle-sub-subcategories'>
            <li>
              <Link href='/productos/pinturas/labios'>
                Labios
              </Link>
            </li>
            <li>
              <Link href='/productos/pinturas/uñas'>
                Uñas
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  )
}
