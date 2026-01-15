import React, { useState } from 'react';
import images from '../../../images';
import Card from '../../ui/Card';

const NewsLetter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Subscribed with email:', email);
    setEmail('');
  };

  return (
    <div className='relative max-w-7xl mx-auto mt-24 py-20 p-10 lg:p-0'>
      <Card className="relative overflow-hidden z-10 ">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 rounded-xl border border-white/20">
            <div className="lg:w-1/2 p-4 lg:p-10">
              <h3 className="text-white text-3xl lg:text-4xl font-bold mb-4">
                  Join Our Newsletter
                </h3>
                <p className="text-white/70 text-lg leading-relaxed">
                  With our cutting-edge template, you'll unlock the power to bring your design ideas to life like never before.
                </p>
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mt-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email..."
                      className="w-75 bg-black border border-white/10 rounded-xl px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50 transition-colors text-lg"
                      required
                    />
                  <button 
                    type="submit"
                    className="bg-white text-black px-5 py-2 rounded-xl cursor-pointer font-medium hover:opacity-90 transition-opacity whitespace-nowrap text-lg"
                  >
                    Submit
                  </button>
                </form>
            </div>

            <div className="lg:w-1/2">
              <div className="rounded-2xl overflow-hidden backdrop-blur-sm">
                <img 
                  src={images.newsletter} 
                  alt="Newsletter Illustration" 
                  className="w-full h-auto object-cover pt-3"
                />
              </div>
            </div>
          </div>
      </Card>
    </div>
  );
};

export default NewsLetter;