import React from 'react'

const SectionTitle = (
    {title, subtTitle, text, bgText}
) => {
  return (
    <>
        <div className="flex flex-wrap justify-between items-end my-10">
           <div className='w-full  lg:w-1/2'>
            <p className='subtitle text-white border border-gray-600 w-fit ps-1 py-2 pe-4 rounded-full '>
                <span><i className="fa-regular fa-star"></i></span>
                {title} 
                </p>
            <h3 className='text-white text-3xl md:text-4xl my-3'>{subtTitle}</h3>
           </div>
           <p className='text-white max-w-xl'> {text}</p>
        </div>
        <h1 className='text-white/40 text-5xl md:text-7xl lg:text-9xl font-bold text-center uppercase opacity-20 absolute inset-0 '>{bgText}</h1>
    </>
  )
}

export default SectionTitle
