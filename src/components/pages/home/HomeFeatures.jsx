import React from 'react'
import images from '../../../images'
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

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
    <div className='relative max-w-6xl mx-auto my-24 p-10 lg:p-0 '>
        <SectionTitle  
            title="Features"
            subtTitle="Our AI Capabilities"
            text="Discover the cutting-edge capabilities of our AI solutions 
                designed to transform your business operations."
            bgText="Features"
        />

        <div className="block md:flex gap-8 mt-10 w-full">
            {features1.map((feature, index) => (
                <Card className='mb-4 lg:mb-0'>
                    <div key={index}>
                    <img src={feature.img} alt={feature.title} className="mb-4 border border-white/10 rounded-xl" loading="lazy"/>
                    <p className="text-white font-semibold mb-2">{feature.title}</p>
                    <p className="text-white/70">{feature.text}</p>
                </div>
                </Card>
            ))}
           <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8">
             {features2.map((feature, index) => (
                <Card key={index} className="lg:col-span-2">
                    <img src={feature.img} alt={feature.title} className="mb-4 w-full" loading="lazy"/>
                   <div className="p-2">
                        <p className="text-white font-semibold mb-2">{feature.title}</p>
                        <p className="text-white/70">{feature.text}</p>
                   </div>
                </Card>
            ))}
           </div>
        </div>
    </div>
  )
}
