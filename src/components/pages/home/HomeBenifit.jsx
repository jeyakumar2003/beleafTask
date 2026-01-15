import React from 'react'
import images from '../../../images'
import Card from '../../ui/Card'

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
    <div className='relative max-w-6xl mx-auto my-24 p-10 lg:p-0'>
         <div className="flex flex-wrap lg:flex-nowrap gap-4 justify-between items-center mb-10">
           <div>
            <p className='subtitle text-white border border-gray-600 w-fit ps-1 py-2 pe-4 rounded-full '>
                <span><i className="fa-regular fa-star"></i></span>
                Benefits
                </p>
            <h3 className='text-white text-3xl md:text-4xl my-3'>What Are The Benefits?</h3>
            <p className='text-white max-6xl'>Benefits
                Here are three key benefits that our AI solution can provide to  
                businesses.
            </p>
           </div>
           <div className="block md:flex subtitle border border-white/30 rounded-xl p-2 gap-2">
            <img src={images.benifit1} alt="" />
            <img className='border border-gray-300/20 rounded-xl' src={images.benifit2} alt="" />
           </div>
        </div>

        <h1 className='text-white/40 text-5xl md:text-7xl  lg:text-9xl font-bold text-center uppercase opacity-20 absolute inset-0 '>benefits</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 w-full">
            {benifits.map((benifit, index) => (
                <Card key={index} className='p-4'>
                    <img src={benifit.icon} alt={benifit.title} className="mb-4 " loading="lazy"/>
                    <p className="text-white font-semibold mb-2">{benifit.title}</p>
                    <p className="text-white/70">{benifit.text}</p>
                </Card>
            ))}
        </div>
    </div>
  )
}
