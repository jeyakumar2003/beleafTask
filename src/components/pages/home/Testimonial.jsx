import images from "../../../images";
import Card from "../../ui/Card";
import SectionTitle from "../../ui/SectionTitle";

const Testimonial = () => {
  const testimonials = [
    {
      text: "Using the Framer template has truly transformed my design process and elevated the quality of my work.",
      name: "John Appleseed",
      role: "Founder & CEO",
    },
     {
      text: "Using the Framer template has truly transformed my design process and elevated the quality of my work.",
      name: "John Appleseed",
      role: "Founder & CEO",
    },
     {
      text: "Using the Framer template has truly transformed my design process and elevated the quality of my work.",
      name: "John Appleseed",
      role: "Founder & CEO",
    },

     {
      text: "Using the Framer template has truly transformed my design process and elevated the quality of my work.",
      name: "John Appleseed",
      role: "Founder & CEO",
    },
     {
      text: "Using the Framer template has truly transformed my design process and elevated the quality of my work.",
      name: "John Appleseed",
      role: "Founder & CEO",
    },
     {
      text: "Using the Framer template has truly transformed my design process and elevated the quality of my work.",
      name: "John Appleseed",
      role: "Founder & CEO",
    },

  ];

  return (
    <div className='relative max-w-7xl my-24 mx-auto p-10 lg:p-0'>
        <SectionTitle
          title="Testimonials"
          subtTitle="What Are Clients Saying"
          text="Hear from the businesses that have transformed their operations with our AI solutions."
          bgText="Testimonials"
         />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  border border-white/10 p-2 rounded-xl">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-4">

              <i class="fa-solid fa-quote-right text-white my-3"></i>
              {/* Testimonial Text */}
              <p className="text-white/80 text-lg mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
                <div className="flex justify-between">
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-white/60 text-sm">{testimonial.role}</p>
                  </div>
                  <img src={images.xapp} alt="" />
                </div>
            </Card>
          ))}
        </div>

        <img className="absolute -top-40 left-1/2 -translate-x-1/2 -z-50" src={images.testBlur} alt="" />
    </div>
  );
};

export default Testimonial;