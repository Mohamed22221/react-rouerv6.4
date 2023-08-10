import React from 'react'
import { useLocation } from 'react-router-dom'

const Location = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div><p>Pathname: {location.pathname}</p></div>
  )
}

export default Location