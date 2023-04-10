'use client'
import React, { useState } from 'react'
// import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import '../styles/Navigation.css'
// import styles from '../styles/Navigation.modules.css'
import Link from 'next/link'
const links = [{
  label: 'Home',
  route: '/'
}, {
  label: 'About',
  route: '/about'
}, {
  label: 'Posts',
  route: '/posts'
}

]

export default function Navigation () {
  const [showMascarillas, setShowMascarillas] = useState(false)
  const [showProductos, setShowProductos] = useState(false)
  const [showSubProductos, setShowSubProductos] = useState(false)

  const toggleMascarillas = () => {
    setShowMascarillas(!showMascarillas)
    setShowProductos(false)
  }

  const toggleProductos = () => {
    setShowProductos(!showProductos)
    setShowMascarillas(false)
  }

  const toggleSubProductos = () => {
    setShowSubProductos(!showSubProductos)
    setShowMascarillas(false)
  }
  return (
    <header>
      <div className='toggle-container'>
      <nav>
        <button className='toggle-category' onClick={toggleMascarillas}>Mascarillas</button>
        {showMascarillas && (
          <ul className='toggle-ul-mascarillas'>
            {links.map(({ label, route }) => (
              <li className='toggle-li' key={label}>
                <Link className='toggle-subcategories' href={route}>{label}</Link>
              </li>
            ))}
          </ul>
        )}
        <button className='toggle-category' onClick={toggleProductos}>Productos</button>
        {showProductos && (
          <ul className='toggle-ul-productos'>
          {links.map(({ label, route }) => (
            <li className='toggle-li' key={label}>
              <Link className='toggle-subcategories' href={route}>{label}</Link>
            </li>
          ))}
          <li className='toggle-li' onClick={toggleSubProductos}>
              <button className='toggle-subcategories' >Item 3</button>
              {showSubProductos && (
                <ul className='subtoggle-ul-productos'>
                  {links.map(({ label, route }) => (
                    <li className='toggle-li' key={label}>
                      <Link className='toggle-subcategories' href={route}>{label}</Link>
                    </li>
                  ))}
              </ul>)}
           </li>
          </ul>
        )}
      </nav>
    </div>
    </header>
  )
}

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
