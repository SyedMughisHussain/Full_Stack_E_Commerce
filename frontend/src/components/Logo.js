import React from 'react'

const Logo = ({w,h}) => {
  return (
    <div className="logo">
        <img src="/brandlogo.png" alt="logo" height={h} width={w} />
    </div>   
  )
}

export default Logo