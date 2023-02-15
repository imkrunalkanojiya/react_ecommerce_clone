import React from 'react'
import {Link} from "react-router-dom"

const index = () => {
  return (
    <div className='breadcrumbs-box'>
        <Link to="/">Home</Link> <span>></span> <Link to="/shop">Shop</Link>
    </div>
  )
}

export default index