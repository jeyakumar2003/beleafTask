import React from 'react'
import images from '../../../images'
import Card from '../../ui/Card'

export const HomeApps = () => {
  return (
    <div className='max-w-6xl mx-auto my-24 p-10 lg:p-0'>
       <Card className="grid grid-cols-1 md:grid-cols-2 gap-10  p-2  overflow-hidden">
        
            <Card className="relative  w-fit overflow-hidden text-white w-full">
                <div className="p-5">
                    <h2 className="text-white text-3xl md:text-5xl mb-6">
                    Desktop
                </h2>
                <p>Discover the cutting-edge capabilities of our AI solutions <br />
                    designed to transform your business operations.
                </p>

                <div className="flex flex-wrap gap-3">
                    <button className="bg-black text-white font-bold px-2 rounded-xl border border-white/30 hover:bg-gray-800 transition  mt-4 py-2 flex items-center gap-2 shadow-lg shadow-black">
                        Download for <i class="fa-brands fa-apple"></i>
                    </button>
                    <button className="bg-black text-white font-bold px-2 rounded-xl border border-white/30 hover:bg-gray-800 transition  mt-4 py-2 flex items-center gap-2 shadow-lg shadow-black">
                        Download for <i class="fa-brands fa-windows"></i>
                    </button>
                </div>
                </div>

                <img className='absolute bottom-0 right-0' src={images.desktop} alt="" />

            </Card>

            <Card className="relative  w-fit   text-white w-full">
                <div className="p-5">
                    <h2 className="text-white text-3xl md:text-5xl mb-6">
                    Mobile
                </h2>
                <p>Discover the cutting-edge capabilities of our AI solutions  <br />
                    designed to transform your business operations.
                </p>

                <div className="flex flex-wrap gap-3">
                    <button className="bg-black text-white font-bold px-2 rounded-xl border border-white/30 hover:bg-gray-800 transition  mt-4 py-2 flex items-center gap-2 shadow-lg shadow-black">
                        Download for <i class="fa-brands fa-apple"></i>
                    </button>
                    <button className="bg-black text-white font-bold px-2 rounded-xl border border-white/30 hover:bg-gray-800 transition  mt-4 py-2 flex items-center gap-2 shadow-lg shadow-black">
                        Download for <i class="fa-brands fa-windows"></i>
                    </button>
                </div>
                </div>

                <img className='block mx-auto z-50' src={images.phone} alt="" />
                <img className='absolute bottom-0 w-full z-0' src={images.fill1} alt="" />
               <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-0">
                    <div className="w-[400px] h-[200px] bg-black/30 rounded-t-full"></div>
                </div>


            </Card>
       </Card>
    </div>
  )
}
