import React, { useState } from 'react';
import images from '../../../images';
import SectionTitle from '../../ui/SectionTitle';
import Card from '../../ui/Card';

const Plans = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Beginner",
      monthlyPrice: "$29",
      yearlyPrice: "$59",
      description: "Perfect for small businesses and startups looking to explore AI capabilities.",
      image: images.plan1,
      features: [
        { text: "Basic Predictive Analytics"},
        { text: "Automated Workflows"},
        { text: "Standard Natural Language Processing"},
        { text: "Real-Time Data Analysis"},
        { text: "Basic Customizable Dashboards"},
        { text: "Email Support"}
      ]
    },
    {
      name: "Professional",
      monthlyPrice: "$59",
      yearlyPrice: "$89",
      description: "Ideal for growing businesses that need more advanced tools to enhance productivity.",
      image: images.plan2,
      features: [
        { text: "Advanced Predictive Analytics"},
        { text: "Automated Workflows"},
        { text: "Enhanced Natural Language Processing"},
        { text: "Real-Time Data Analysis"},
        { text: "Advanced Customizable Dashboards"},
        { text: "Priority Email Support"},
      ],
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: "$99",
      yearlyPrice: "$149",
      description: "Designed for enterprises requiring comprehensive AI solutions.",
      image: images.plan3,
      features: [
        { text: "Advanced Predictive Analytics"},
        { text: "Automated Workflows"},
        { text: "Enhanced Natural Language Processing"},
        { text: "Real-Time Data Analysis"},
        { text: "Advanced Customizable Dashboards"},
        { text: "24/7 Priority Support"},
      ]
    }
  ];

  return (
    <div className='relative max-w-7xl mx-auto mt-24  p-10 lg:p-0'>
      <SectionTitle 
        title="Pricing"
        subtTitle="Our Pricing Plans"
        text="Here are three different plans tailored to Beginner, Professional, and Enterprise levels for your AI solution:"
        bgText="Pricing"
       />

      <div className="flex justify-center mb-12 lg:mb-16 relative z-10">
        <div className="inline-flex bg-white/5 border border-white/10 p-1 rounded-2xl backdrop-blur-sm">
          <button 
            onClick={() => setIsYearly(false)}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${!isYearly 
              ? 'bg-gradient-to-r from-white/20 to-white/20 text-white border border-white/20' 
              : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsYearly(true)}
            className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${isYearly 
              ? 'bg-gradient-to-r from-white/20 to-white/20 text-white border border-white/20' 
              : 'text-white/70 hover:text-white hover:bg-white/5'
            }`}
          >
            Yearly 
          </button>
        </div>
      </div>

      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
        {plans.map((plan, index) => (
          <Card  key={index}>

            <div className="p-4">
                <div className="flex justify-between items-center mb-6">
                <img 
                    src={plan.image} 
                    alt={plan.name} 
                    className="w-16 h-16 object-contain"
                />
                <div className="text-center mb-4">
                    <div className="flex items-center justify-center gap-2">
                        <span className="text-white text-4xl lg:text-5xl font-bold">
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                        </span>
                        <span className="text-white/60 text-lg">/ Per month</span>
                    </div>
                    {isYearly && (
                        <p className="text-white/40 text-sm mt-1">Billed annually</p>
                    )}
                </div>
            </div>

            <h4 className="text-white text-2xl font-bold mb-2">{plan.name}</h4>
            <p className="text-white/70 text-sm lg:text-md mb-6">
              {plan.description}
            </p>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/10 p-3 m-2 rounded-xl">
                <button className={`w-full bg-gradient-to-r  ${plan.popular ? 'from-white to-white text-black' : 'from-black/70 to-black/60 text-white'}  py-3 px-4 rounded-xl 
              font-medium flex items-center justify-center gap-2 group`}>
              Get Started
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
                </button>

                  <p className='text-white text-semibold my-3'>Features:</p>  
                <div className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                    <span className="text-green-400 text-lg mt-0.5">
                        <img src={images.planPoints} alt="" />
                    </span>
                    <span className="text-white/80 text-sm lg:text-md">{feature.text}</span>
                    </div>
                ))}
                </div>
            </div>

          </Card>
        ))}
      </div>

    <button className="bg-black text-white px-4 py-2 border border-white/20 rounded-xl block mx-auto mt-8">
        View More
    </button>
    </div>
  );
};

export default Plans;