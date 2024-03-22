import React from 'react'
import './style.css'

function ProviderBox({imageSrc , label}) {
  return (
    <div className='provider__box'>
        {imageSrc && <img src={imageSrc} alt='logo'/>}
        <span>{label}</span>
    </div>
  )
}

export default ProviderBox