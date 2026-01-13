import React from 'react'
import images from '../../../images'

export const HomeApps = () => {
  return (
    <div className='max-w-7xl mx-auto mt-25 p-10 md:p-0'>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 subtitle p-2 rounded-xl">
            <div className="subtitle border border-gray-600 rounded-xl w-fit   text-white w-full">
                <div className="p-5">
                    <h2 className="text-white text-3xl md:text-5xl mb-6">
                    Desktop
                </h2>
                <p>Discover the cutting-edge capabilities of our AI solutions <br />
                    designed to transform your business operations.
                </p>

                <div className="flex">
                    <button className="bg-black text-white font-bold px-2 rounded-xl border border-white/30 hover:bg-gray-800 transition mr-4 mt-4 py-2 flex items-center gap-2 shadow-lg shadow-black">
                        Download for <i class="fa-brands fa-apple"></i>
                    </button>
                    <button className="bg-black text-white font-bold px-2 rounded-xl border border-white/30 hover:bg-gray-800 transition mr-4 mt-4 py-2 flex items-center gap-2 shadow-lg shadow-black">
                        Download for <i class="fa-brands fa-windows"></i>
                    </button>
                </div>
                </div>

                <img className='ms-4' src={images.desktop} alt="" />

            </div>

            <div className="relative subtitle border border-gray-600 rounded-xl w-fit   text-white w-full">
                <div className="p-5">
                    <h2 className="text-white text-3xl md:text-5xl mb-6">
                    Mobile
                </h2>
                <p>Discover the cutting-edge capabilities of our AI solutions  <br />
                    designed to transform your business operations.
                </p>

                <div className="flex">
                    <button className="bg-black text-white font-bold px-2 rounded-xl border border-white/30 hover:bg-gray-800 transition mr-4 mt-4 py-2 flex items-center gap-2 shadow-lg shadow-black">
                        Download for <i class="fa-brands fa-apple"></i>
                    </button>
                    <button className="bg-black text-white font-bold px-2 rounded-xl border border-white/30 hover:bg-gray-800 transition mr-4 mt-4 py-2 flex items-center gap-2 shadow-lg shadow-black">
                        Download for <i class="fa-brands fa-windows"></i>
                    </button>
                </div>
                </div>

                <img className='block mx-auto' src={images.phone} alt="" />
                <img className='absolute bottom-0 w-full z-30' src={images.fill1} alt="" />
                <img className='absolute bottom-0 w-full z-10' src={images.fill2} alt="" />

            </div>
       </div>
    </div>
  )
}
