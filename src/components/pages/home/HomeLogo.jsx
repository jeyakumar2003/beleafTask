import React from 'react'
import images from '../../../images'

export const HomeLogo = () => {
  const logos = [
    images.logo1,
    images.logo2,
    images.logo3,
    images.logo4,
    images.logo5,
    images.logo6,
  ]

  return (
    <div className="w-full md:max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-25">
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Company logo ${index + 1}`}
          loading="lazy"
          className="mx-auto object-contain"
        />
      ))}
    </div>
  )
}
