import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import images from '../../images';

export const Header = () => {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: 'Home', link: '/' },
    { name: 'Integration', link: '/integration' },
    { name: 'Pricing', link: '/pricing' },
    { name: 'Logs', link: '/logs' },
    { name: 'Contact', link: '/contact' },
  ];

  return (
    <header className=" p-4 z-50">
      <nav className="flex justify-between items-center max-w-4xl mx-auto border border-white p-2 rounded-xl bg-white/10 backdrop-blur-xl">
        
        {/* Logo */}
        <img className="w-12 h-12" src={images.logo} alt="Logo" />

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6">
          {menu.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  `relative text-white px-4 py-2 rounded-lg transition-all duration-300
                  ${isActive ? 'bg-white/40 font-semibold' : 'hover:bg-white/20'}`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:flex bg-black/70 text-white border border-white px-4 py-2 rounded-lg items-center gap-2">
          <span>Get Template</span>
          <img src={images.arrow} alt="Arrow icon" />
        </button>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-2 max-w-4xl mx-auto rounded-xl bg-white/10 backdrop-blur-xl border border-white">
          <ul className="flex flex-col p-4 space-y-3">
            {menu.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block text-white px-4 py-2 rounded-lg
                    ${isActive ? 'bg-white/40 font-semibold' : 'hover:bg-white/20'}`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}

            <button className="bg-black/70 text-white border border-white px-4 py-2 rounded-lg flex items-center justify-center gap-2">
              <span>Get Template</span>
              <img src={images.arrow} alt="Arrow icon" />
            </button>
          </ul>
        </div>
      )}
    </header>
  );
};
