import React from 'react'
import images from '../../../images'

export const TopFeatures = () => {
    const features1 = [
        {
            title:"Deep Learning Models",
            text:"Leverage the power of deep neural networks for complex data processing and decision-making.",
            img : images.top1
        },
        {
            title: "Cognitive Automation",
            text: "Transform your business processes with cognitive automation.",
            img : images.top2
        },
        {
            title: "Advanced NLP",
            text:"Go beyond basic NLP with our advanced NLP capabilities. ",
            img : images.top3
        }
    ]
    const features2 = [
        {
            title: "AI-Powered Predictive Maintenance",
            text: "Prevent costly downtime with our AI-driven predictive maintenance feature.  By analyzing equipment data in real-time.",
            img : images.top4
        },
        {
            title: "Computer Vision & Image Recognition",
            text: "Unlock new possibilities with our cutting-edge computer vision technology.  Our AI can analyze and interpret visual data",
            img : images.top5
        }
    ]
  return (
    <div className='relative max-w-7xl mx-auto mt-25 p-10 md:p-0'>
        <div className="flex flex-wrap justify-between items-center mb-10">
           <div>
            <p className='subtitle text-white border border-gray-600 w-fit ps-1 py-2 pe-4 rounded-full '>
                <span><i className="fa-regular fa-star"></i></span>
                Top Features 
                </p>
            <h3 className='text-white text-3xl md:text-5xl my-3'>More Than AI</h3>
           </div>
           <p className='text-white'>Discover the cutting-edge capabilities of our AI solutions  <br />
                designed to transform your business operations.
            </p>
        </div>


        <h1 className='text-white/40 text-5xl md:text-9xl  font-bold text-center uppercase opacity-20 absolute inset-0 '>features</h1>

        <div className="grid md:grid-cols-3 gap-10 mb-10">
            {
                features1.map((feature, index) => (
                    <div key={index} className="subtitle p-2  rounded-lg border border-gray-700 hover:scale-105 transition-transform duration-300">
                        <img src={feature.img} alt={feature.title} className="mb-4 border border-gray-300/30 w-full" loading="lazy"/>
                        <p className="text-white  font-semibold mb-2">{feature.title}</p>
                        <p className="text-gray-300">{feature.text}</p>
                    </div>
                ))
            }
        </div>
        <div className="grid md:grid-cols-2 gap-10">
            {
                features2.map((feature, index) => (
                    <div key={index} className="subtitle rounded-lg p-2 border border-gray-700 hover:scale-105 transition-transform duration-300">
                        <img src={feature.img} alt={feature.title} className="mb-4 border border-gray-300/30 w-full" loading="lazy"/>
                        <p className="text-white  font-semibold mb-2">{feature.title}</p>
                        <p className="text-gray-300">{feature.text}</p>
                    </div>
                ))
            }
        </div>

    </div>
  )
}
