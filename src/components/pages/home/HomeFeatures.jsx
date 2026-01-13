import React from 'react'
import images from '../../../images'

export const HomeFeatures = () => {

    const features1 = [
        { 
            title: "Predictive Analytics", 
            text:"Harness the power of data to forecast trends and make informed decisions.",
            img: images.feature6
        },
        {
            title:"Automated Workflows", 
            text:"Streamline your business processes with our automated workflow feature.",
            img: images.feature5
        },
    ];
    const features2 = [
        {
            title:"Real-Time Data Analysis",
            text: "Make decisions faster with our real-time data analysis feature and get instant access to up-to-date info.",
            img: images.feature7
        },
        {
            title:"Natural Language Processing",
            text:"Improve customer interactions and data analysis with our state-of-the-art NLP capabilities.",
            img : images.feature8
        }
    ]
  return (
    <div className='relative max-w-7xl mx-auto mt-25 p-10 md:p-0'>
        <div className="flex flex-wrap justify-between items-center mb-10">
           <div>
            <p className='subtitle text-white border border-gray-600 w-fit ps-1 py-2 pe-4 rounded-full '>
                <span><i className="fa-regular fa-star"></i></span>
                Features
                </p>
            <h3 className='text-white text-3xl md:text-5xl my-3'>Our AI Capabilities</h3>
           </div>
           <p className='text-white'>Discover the cutting-edge capabilities of our AI solutions  <br />
                designed to transform your business operations.
            </p>
        </div>

        <h1 className='text-white/40 text-6xl md:text-9xl  font-bold text-center uppercase opacity-20 absolute inset-0 '>features</h1>

        <div className="block md:flex gap-8 mt-10 w-full">
            {features1.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300">
                    <img src={feature.img} alt={feature.title} className="mb-4 " loading="lazy"/>
                    <p className="text-white font-semibold mb-2">{feature.title}</p>
                    <p className="text-white/70">{feature.text}</p>
                </div>
            ))}
           <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
             {features2.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/30  rounded-xl hover:scale-105 transition-transform duration-300 lg:col-span-2">
                    <img src={feature.img} alt={feature.title} className="mb-4 w-full" loading="lazy"/>
                   <div className="p-2">
                        <p className="text-white font-semibold mb-2">{feature.title}</p>
                        <p className="text-white/70">{feature.text}</p>
                   </div>
                </div>
            ))}
           </div>
        </div>
    </div>
  )
}
