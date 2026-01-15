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
    <div className="relative w-full md:max-w-3xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 my-0 lg:my-35 p-10 lg:p-0">
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
