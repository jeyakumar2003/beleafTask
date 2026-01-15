import React from 'react'
import images from '../../../images'
import Card from '../../ui/Card';

const MobileApps = () => {
  const mobileData1 = [
    {
      img: images.mob1,
      title: "Smart Task Scheduling",
      text: "Automatically prioritize and schedule tasks based on urgency, deadlines, and user preferences."
    },
    {
      img: images.mob2,
      title: "Automated Workflows",
      text: "Create and manage complex workflows with ease, automating repetitive tasks and multi-step processes."
    },
    {
      img: images.mob3,
      title: "Analytics",
      text: "Analyze data trends and receive predictions that help optimize business decisions and strategies."
    }
  ];

  const mobileData3 = [
    {
      img: images.mob2,
      title: "Real-Time Notifications",
      text: "Stay informed with real-time alerts and notifications for critical updates and task completions."
    },
    {
      img: images.mob1,
      title: "Customizable Dashboards",
      text: "Personalize your dashboard to display key metrics, tasks, and data that matter most to you."
    },
    {
      img: images.mob1,
      title: "Seamless Third-Party Integration",
      text: "Connect with other tools and apps effortlessly, integrating your existing systems into the automation process."
    }
  ];

  return (
    <div className="relative max-w-6xl mx-auto my-24 p-10 lg:p-0">
      <h1 className="text-white/40 text-5xl md:text-9xl font-bold text-center uppercase opacity-20 absolute inset-0">
        Mobile App
      </h1>

      <div className="grid grid-cols-12 gap-6 relative">

        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-8 mt-24">
          {mobileData1.map((item, index) => (
            <Card
              key={index}
              className='p-4'
            >
              <img src={item.img} alt={item.title} className="mb-4" loading="lazy" />
              <p className="text-white font-semibold mb-2">{item.title}</p>
              <p className="text-white/70">{item.text}</p>
            </Card>
          ))}
        </div>

        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-8 mt-24">

          <Card className="relative">
            <Card className="h-100">
              <div className="flex justify-between items-start gap-4">
                <div className="block max-w-sm">
                  <img src={images.mob4} alt="" className="mb-4 w-12" loading="lazy" />
                  <p className="text-white font-semibold mb-2">Go mobile</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Our AI automation mobile app <br /> is designed to simplify and <br/>
                    supercharge your <br /> productivity.
                  </p>
                </div>

                <img src={images.mob6} alt="" className="absolute right-0 bottom-0 h-64" />
              </div>
            </Card>
          </Card>

          <Card>
            <Card>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Easily access all app features with a user-friendly,
                intuitive menu design that streamlines navigation and
                enhances productivity.
              </p>

              <img src={images.mob7} alt="" className="w-full max-w-xs mx-auto" />
            </Card>
          </Card>

        </div>

        <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-8 mt-24">
          {mobileData3.map((item, index) => (
            <Card key={index}>
              <img src={item.img} alt={item.title} className="mb-4" loading="lazy" />
              <p className="text-white font-semibold mb-2">{item.title}</p>
              <p className="text-white/70">{item.text}</p>
            </Card>
          ))}
        </div>

      </div>

      <button className="bg-black text-white px-4 py-2 border border-white/20 rounded-xl block mx-auto mt-8">
        Get App
      </button>
    </div>
  );
};

export default MobileApps;
