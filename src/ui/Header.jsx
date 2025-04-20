import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-500 px-4 py-3 uppercase sm:px-6 font-pizza">
        <Link to = "/" className="tracking-widest">Fast React Pizza</Link>
        <SearchOrder/>
        <p>Teds Zed</p>
    </header>
  )
}

export default Header