import React from "react";
import images from "../../../images";

export const HomeBanner = () => {
  return (
    <section className="min-h-screen overflow-hidden bg-gradient-to-t from-black to-transparent py-15  lg:py-24 px-10 lg:p-0">
      
      <div className="relative z-50 flex  flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <img className="w-24" src={images.logo} alt="" />
        <h1 className="text-white font-bold leading-tight
          text-4xl sm:text-6xl md:text-8xl lg:text-9xl
          text-center">
          AI-DRIVEN
        </h1
        >

        <h1 className="text-white uppercase opacity-40 font-bold leading-tight
          text-3xl sm:text-5xl md:text-7xl lg:text-9xl
          text-center">
          Technology
        </h1>

        <div className="lg:absolute -bottom-30 flex flex-col justify-center items-center">
          <button className="bg-white/20 mt-4 flex  items-center  py-1 pe-4  rounded-full border border-white  text-white text-sm sm:text-lg">
          <img
            src={images.icon}
            alt="AI icon"
            className=""
            loading="lazy"
          />
          <span>Advanced AI technology</span>
          </button>

        <p className="mt-4 text-white text-sm sm:text-base md:text-lg
          max-w-xl sm:max-w-xl">
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
      </div>

      <div className="hidden lg:flex absolute top-0 inset-0 justify-between items-center pointer-events-none opacity-80">
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

      <div className="hidden lg:flex absolute -bottom-20 w-full justify-between px-20 pointer-events-none">
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

      <div className="hidden lg:flex gap-15 absolute top-0 left-0 pointer-events-none">
        <img  src={images.Vector2} alt="vector 1" />
        <img  src={images.Vector1} alt="vector 2" />
      </div>

      <div className="hidden lg:block absolute top-0 right-0 pointer-events-none">
        <img src={images.Vector4} alt="vector 3" />
        <img src={images.Vector3} alt="vector 4" />
      </div>

      <img
        src={images.blur}
        alt="background blur"
        className="absolute inset-0 w-full h-full object-cover -z-50"
        loading="lazy"
      />
    </section>
  );
};
