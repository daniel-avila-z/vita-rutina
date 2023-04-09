'use client'
import React, { useState } from 'react'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import '../styles/Navbar.css'
import '../styles/NewNavbar.css'

const Navbar = () => {
  const [showMascarillas, setShowMascarillas] = useState(false)
  const [showProductos, setShowProductos] = useState(false)

  const toggleMascarillas = () => {
    setShowMascarillas(!showMascarillas)
    setShowProductos(false)
  }

  const toggleProductos = () => {
    setShowProductos(!showProductos)
    setShowMascarillas(false)
  }
  return (
    <div className='toggle-container'>
      <nav>
        <button className='toggle-category' onClick={toggleMascarillas}>Mascarillas</button>
        {showMascarillas && (
          <ul className='toggle-ul-mascarillas'>
            <li className='toggle-li'><button className='toggle-subcategories'>Item 1</button></li>
            <li className='toggle-li'><button className='toggle-subcategories'>Item 2</button></li>
            <li className='toggle-li'><button className='toggle-subcategories'>Item 3</button></li>
          </ul>
        )}
        <button className='toggle-category' onClick={toggleProductos}>Productos</button>
        {showProductos && (
          <ul className='toggle-ul-productos'>
            <li className='toggle-li'><button className='toggle-subcategories'>Item 1</button></li>
            <li className='toggle-li'><button className='toggle-subcategories'>Item 2</button></li>
            <li className='toggle-li'>
              <button className='toggle-subcategories'>Item 3</button>
              <ul className='subtoggle-ul'>
                <li className='toggle-li'><button className='toggle-subcategories'>Subitem 1</button></li>
                <li className='toggle-li'><button className='toggle-subcategories'>Subitem 2</button></li>
              </ul>
            </li>
          </ul>
        )}
      </nav>
    </div>
  )
}

export default Navbar

// import React, { useState } from 'react'
// import Link from 'next/link'

// export default function Navbar () {
//   const [activeCategory, setActiveCategory] = useState('')
//   const [activeSubCategory, setActiveSubCategory] = useState('')

//   const handleCategoryClick = (category) ={'>'} {
//     if (activeCategory === category) {
//       setActiveCategory('')
//       setActiveSubCategory('')
//     {'}'} else {
//       setActiveCategory(category)
//       setActiveSubCategory('')
//     {'}'}
//   {'}'}

//   const handleSubCategoryClick = (subCategory) ={'>'} {
//     setActiveSubCategory(subCategory)
//   {'}'}

//   return (
//     <div className='toggle-container'>
//       <div className='toggle-category'>
//         <h3 onClick={() => handleCategoryClick('mascarillas')}>Mascarillas</h3>
//         {activeCategory === 'mascarillas' && (
//           <ul className='toggle-subcategories'>
//             <li>
//               <Link href='/mascarillas/en-polvo' legacyBehavior>
//                 En Polvo
//               </Link>
//             </li>
//             <li>
//               <Link href='/mascarillas/en-crema' legacyBehavior>
//                 En Crema
//               </Link>
//             </li>
//             <li>
//               <Link href='/mascarillas/en-crema' legacyBehavior>
//                 Solida Térmica
//               </Link>
//             </li>
//             <li>
//               <Link href='/mascarillas/en-crema' legacyBehavior>
//                 Pastosas
//               </Link>
//             </li>
//             <li>
//               <Link href='/mascarillas/en-crema' legacyBehavior>
//                 En Gel
//               </Link>
//             </li>
//             <li>
//               <Link href='/mascarillas/en-crema' legacyBehavior>
//                 Fango o Barro Termas
//               </Link>
//             </li>
//             <li>
//               <Link href='/mascarillas/en-crema' legacyBehavior>
//                 Velo
//               </Link>
//             </li>
//             <li>
//               <Link href='/mascarillas/en-crema' legacyBehavior>
//                 Pastica Fría
//               </Link>
//             </li>
//             <li>
//               <Link href='/mascarillas/en-crema' legacyBehavior>
//                 Peel-off
//               </Link>
//             </li>
//             <li>
//               <Link href='/mascarillas/en-crema' legacyBehavior>
//                 Batidos
//               </Link>
//             </li>
//           </ul>
//         ){'}'}
//       </div>
//       <div className='toggle-category'>
//         <h3 onClick={() => handleCategoryClick('productos')}>Productos</h3>
//         {activeCategory === 'productos' && (
//           <ul className='toggle-subcategories'>
//             <li>
//               <Link href='/productos/cremas'>
//                 Cremas
//               </Link>
//             </li>
//             <li onClick={() => handleSubCategoryClick('pinturas')}>
//               Pinturas
//             </li>
//           </ul>
//         ){'}'}
//         {activeSubCategory === 'pinturas' && (
//           <ul className='toggle-sub-subcategories'>
//             <li>
//               <Link href='/productos/pinturas/labios'>
//                 Labios
//               </Link>
//             </li>
//             <li>
//               <Link href='/productos/pinturas/uñas'>
//                 Uñas
//               </Link>
//             </li>
//           </ul>
//         ){'}'}
//       </div>
//     </div>
//   )
// {'}'}
