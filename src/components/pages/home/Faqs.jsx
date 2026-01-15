import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of tasks can be automated with this app?",
      answer: "Our AI automation app can handle a wide range of tasks including predictive analytics, automated workflows, natural language processing, real-time data analysis, customizable dashboards, and more."
    },
    {
      question: "How secure is my data in the app?",
      answer: "We implement enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, regular security audits, and data backup protocols."
    },
    {
      question: "Can I integrate this app with other tools I use?",
      answer: "Yes! Our platform offers seamless integration with popular tools like Slack, Microsoft Teams, Google Workspace, Salesforce, and many others."
    },
    {
      question: "How easy is it to set up and use the app?",
      answer: "Most users can get started in under 30 minutes with our intuitive interfaces and guided setup processes."
    },
    {
      question: "What kind of support is available if I need help?",
      answer: "We offer 24/7 email support, comprehensive documentation, video tutorials, and dedicated customer success teams."
    }
  ];

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='relative max-w-6xl mx-auto mt-24 py-0 lg:py-20 px-4 lg:px-8'>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="flex flex-wrap justify-between items-center mb-10">
           <div>
            <p className='subtitle text-white border border-gray-600 w-fit ps-1 py-2 pe-4 rounded-full '>
                <span><i className="fa-regular fa-star"></i></span>
                Faqs
            </p>
            <h3 className='text-white text-3xl md:text-5xl my-3'>Frequently Asked <br />Questions</h3>
           </div>
            </div>


            <div className="relative z-10">
                {faqs.map((faq, index) => (
                <div 
                    key={index}
                    className={`border-b overflow-hidden transition-all duration-300 ${
                    activeIndex === index 
                        ? 'border-blue-500/30' 
                        : 'border-white/10'
                    }`}
                >
                    <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex justify-between items-center p-6 text-left hover:bg-white/5 transition-colors"
                    >
                    <span className={`text-md font-medium ${
                        activeIndex === index ? 'text-white' : 'text-white/90'
                    }`}>
                        {faq.question}
                    </span>
                    <svg 
                        className={`w-6 h-6 transition-transform duration-300 ${
                        activeIndex === index ? 'transform rotate-180 text-blue-400' : 'text-white/60'
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                    </button>
                    
                    <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ${
                        activeIndex === index 
                        ? 'max-h-48 pb-6 opacity-100' 
                        : 'max-h-0 opacity-0'
                    }`}
                    >
                    <div className="pt-4 border-t border-white/10">
                        <p className="text-white/70 text-md leading-relaxed">
                        {faq.answer}
                        </p>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Faqs;