import React from "react";
import images from "../../../images";

export const HomeBanner = () => {
  return (
    <section className="min-h-screen overflow-hidden">
      
      <div className="relative z-50 flex min-h-screen flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        
        <h1 className="text-white font-bold leading-tight
          text-4xl sm:text-6xl md:text-8xl lg:text-9xl
          text-center w-full">
          AI - DRIVEN
        </h1>

        <h2 className="text-white uppercase opacity-40 font-bold leading-tight
          text-3xl sm:text-5xl md:text-7xl lg:text-9xl
          text-center w-full">
          Technology
        </h2>

        <button className="mt-4 flex items-center gap-3 rounded-full border border-white px-4 py-2 text-white text-sm sm:text-lg">
          <img
            src={images.icon}
            alt="AI icon"
            className="h-5 w-5 sm:h-7 sm:w-7"
            loading="lazy"
          />
          <span>Advanced AI technology</span>
        </button>

        <p className="mt-4 text-white text-sm sm:text-base md:text-lg
          max-w-xl sm:max-w-2xl">
          From predictive analytics to automated workflows, explore how our
          technology can drive your success and keep you ahead of the
          competition.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-black px-6 py-2 rounded-md font-bold hover:bg-gray-200 transition">
            Get Started <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
          <button className="border border-gray-600 text-white px-6 py-2 rounded-md font-bold hover:bg-white hover:text-black transition">
            View all
          </button>
        </div>
      </div>

      <div className="hidden lg:flex absolute inset-0 justify-between items-center pointer-events-none opacity-80">
        <img
          src={images.feature1}
          alt="feature 1"
          className="max-h-[70vh] object-contain"
          loading="lazy"
        />
        <img
          src={images.feature3}
          alt="feature 3"
          className="max-h-[70vh] object-contain"
          loading="lazy"
        />
      </div>

      <div className="hidden lg:flex absolute bottom-10 w-full justify-around px-20 pointer-events-none">
        <img
          src={images.feature4}
          alt="feature 4"
          className="max-h-[40vh] object-contain"
          loading="lazy"
        />
        <img
          src={images.feature2}
          alt="feature 2"
          className="max-h-[40vh] object-contain"
          loading="lazy"
        />
      </div>

      <div className="hidden lg:flex absolute top-0 left-0 gap-4 pointer-events-none">
        <img src={images.Vector1} alt="vector 1" className="max-h-[30vh]" />
        <img src={images.Vector2} alt="vector 2" className="max-h-[30vh]" />
      </div>

      <div className="hidden lg:block absolute top-0 right-0 pointer-events-none">
        <img src={images.Vector3} alt="vector 3" className="max-h-[30vh]" />
        <img src={images.Vector4} alt="vector 4" className="max-h-[30vh]" />
      </div>

      <img
        src={images.blur}
        alt="background blur"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
    </section>
  );
};
