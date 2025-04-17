import React from 'react'
import { Link } from 'react-router-dom'
import SearchOrder from '../features/order/SearchOrder'

function Header() {
  return (
    <header>
        <Link to = "/">Fast React Pizza</Link>
        <SearchOrder/>
        <p>Teds Zed</p>
    </header>
  )
}

export default Header