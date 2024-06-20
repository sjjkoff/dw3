import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <h1>No se encontro la pagina</h1>
      <Link to="/">Ir a Home </Link>
    </div>
  )
}

export default Error404
