import React from 'react'
import images from '../../../images'

export const HomeBenifit = () => {

    const benifits = [
        {
            title: "Enhanced Decision-Making",
            text: "Leverage the power of advanced data analytics and machine learning to make smarter, data-driven decisions.",
            icon: images.benIcon1
        },
        {
            title:"Increased Efficiency & Productivity",
            text:"Automate repetitive tasks and streamline workflows to save time and reduce operational costs.",
            icon: images.benIcon2
        },
        {
            title: "Improved Customer Engagement",
            text: "Enhance your customer interactions with our natural language processing capabilities.",
            icon: images.benIcon1
        }
    ]
  return (
    <div className='relative max-w-7xl mx-auto mt-25 p-10 md:p-0'>
         <div className="flex flex-wrap justify-between items-center mb-10">
           <div>
            <p className='subtitle text-white border border-gray-600 w-fit ps-1 py-2 pe-4 rounded-full '>
                <span><i className="fa-regular fa-star"></i></span>
                Benefits
                </p>
            <h3 className='text-white text-3xl md:text-5xl my-3'>What Are The Benefits?</h3>
            <p className='text-white'>Benefits
                Here are three key benefits that our AI solution can provide to  <br />
                businesses.
            </p>
           </div>
           <div className="flex flex-wrap subtitle border border-white/30 rounded-xl p-4 gap-4">
            <img src={images.benifit1} alt="" />
            <img className='border border-gray-300/20 rounded-xl' src={images.benifit2} alt="" />
           </div>
        </div>

        <h1 className='text-white/40 text-5xl md:text-9xl  font-bold text-center uppercase opacity-20 absolute inset-0 '>benefits</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
            {benifits.map((benifit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl border border-white/30 p-4 rounded-xl hover:scale-105 transition-transform duration-300">
                    <img src={benifit.icon} alt={benifit.title} className="mb-4 " loading="lazy"/>
                    <p className="text-white font-semibold mb-2">{benifit.title}</p>
                    <p className="text-white/70">{benifit.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}
