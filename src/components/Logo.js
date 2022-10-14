import React from 'react'
import { Link } from 'react-router-dom';

const Logo = ({ className }) => {
  return (
    <Link className={className} to="/" title='Inicio'>El Villanense</Link>
  )
}

export default Logo;
