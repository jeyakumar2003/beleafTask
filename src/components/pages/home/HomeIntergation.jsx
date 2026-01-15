import React from 'react'
import images from '../../../images'
import SectionTitle from '../../ui/SectionTitle'
import Card from '../../ui/Card'

export const HomeIntergation = () => {
  const integrations =[
    {
      title: "figma.com",
      text: "Unlock the potential of automation, data synchronization, and improved experiences.",
      icon: images.intlogo1,
      link: ""
    },
    {
      title: "framer.com",
      text: "Unlock the potential of automation, data synchronization, and improved experiences.",
      icon: images.intlogo2,
      link: ""
    },
    {
      title: "dribbble.com",
      text: "Unlock the potential of automation, data synchronization, and improved experiences.",
      icon: images.intlogo3,
      link: ""
    },
    {
      title: "slack.com",
      text: "Unlock the potential of automation, data synchronization, and improved experiences.",
      icon: images.intlogo4,
      link: ""
    },
    {
      title: "arc.net",
      text: "Unlock the potential of automation, data synchronization, and improved experiences.",
      icon: images.intlogo5,
      link: ""
    },
    {
      title: "notion.so",
      text: "Unlock the potential of automation, data synchronization, and improved experiences.",
      icon: images.intlogo6,
      link: ""
    },
  ]
  return (
    <div className='relative max-w-6xl mx-auto p-10 lg:p-0'>
      <SectionTitle 
        title="Integrations"
        subtTitle="Connect Effortlessly"
        text= "Our AI solutions are designed to integrate smoothly with your current technology stack."
        bgText="Integrations"
       />
      <div className="relative">
        <p className="
          w-fit mx-auto text-white px-10 py-3 rounded-xl
            bg-white/5 backdrop-blur z-50
          ">
            Fueled by
        </p>

        <img className='absolute -bottom-2 left-1/2 -translate-x-1/2 -z-50 w-32' src={images.intsvg1} alt="" />
        <img className='absolute -bottom-22 left-1/2 -translate-x-1/2 -z-50' src={images.intsvg2} alt="" />
      </div>

       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-25 w-full">
            {integrations.map((integrations, index) => (
                <Card >
                  <div key={index} className='border border-white/10 p-2' >
                    <div className="flex flex-wrap gap-3 justify-between items-center">
                      <img src={integrations.icon} alt={integrations.title} className="mb-4 " loading="lazy"/>
                      <button className="flex items-center gap-2 text-white shadow-lg   p-2 rounded-full cursor-pointer">
                        View Website
                        <i className="fa-solid fa-arrow-right -rotate-45"></i>
                      </button>
                    </div>
                    <p className="text-white font-semibold mb-2">{integrations.title}</p>
                    <p className="text-white/70">{integrations.text}</p>
                  </div>
                </Card>
            ))}
        </div>


        <button className="bg-black text-white px-4 py-2 border border-white/20 rounded-xl block  mx-auto mt-4">View More</button>
    </div>
  )
}
