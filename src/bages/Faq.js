import React from 'react'
import { useLocation } from 'react-router-dom'

const Faq = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div><p>Pathname: {location.pathname}</p></div>
  )
}

export default Faq