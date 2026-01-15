import React from 'react'
import images from '../../../images'
import SectionTitle from '../../ui/SectionTitle'
import Card from '../../ui/Card'

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
    <div className='relative max-w-7xl mx-auto mt-25 p-10 lg:p-0 bg-gradient-to-tb from-bg-black to-white'>
        <SectionTitle
            title="Top Features"
            subtTitle="More Than AI"
            text="Step into the future with AI, engineered to tackle the most complex challenges."
            bgText="Features"
        />
        <div className="grid md:grid-cols-3 gap-10 mb-10">
            {features1.map((feature, index) => (
                <Card key={index} >
                    <img src={feature.img} alt={feature.title} className="mb-4 rounded-xl border border-gray-300/30 w-full" loading="lazy"/>
                    <div className="p-3">
                        <p className="text-white  font-semibold mb-2">{feature.title}</p>
                        <p className="text-gray-300">{feature.text}</p>
                    </div>
                </Card>
                ))}
        </div>
        <div className="grid md:grid-cols-2 gap-10">
            {features2.map((feature, index) => (
                <Card key={index} >
                    <img src={feature.img} alt={feature.title} className="mb-4 rounded-xl border border-gray-300/30 w-full" loading="lazy"/>
                    <div className="p-3">
                        <p className="text-white  font-semibold mb-2">{feature.title}</p>
                        <p className="text-gray-300">{feature.text}</p>
                    </div>
                </Card>
            ))}
        </div>

    </div>
  )
}
