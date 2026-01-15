import React from 'react';

const Card = ({ 
  children, 
  className = "", 
  variant = "default",
  glow = true,
  hoverEffect = true,
  padding = "p-2",
  ...props 
}) => {
  const variants = {
    default: {
      bg: "bg-gradient-to-br from-white/5 to-white/0",
      border: "border-white/10",
      hover: "hover:border-white/20 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5"
    },
    transparent: {
      bg: "bg-transparent",
      border: "border-white/5",
      hover: "hover:border-white/10 hover:bg-white/5"
    }
  };

  const selectedVariant = variants[variant] || variants.default;

  return (
    <div
      className={`
        relative
        rounded-xl
        ${selectedVariant.bg}
        ${selectedVariant.border}
        ${padding}
        border
        border-white/10
        backdrop-blur-sm
        transition-all duration-500 ease-out
        ${hoverEffect ? selectedVariant.hover : ''}
        ${hoverEffect ? 'hover:-translate-y-2 hover:scale-[1.02]' : ''}
        ${className}
      `}
      {...props}
    >
      {glow && (
        <div className={`
          absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-500
          ${hoverEffect ? 'group-hover:opacity-100' : ''}
        `} />
      )}

      {/* Inner Glow Border */}
      <div className={`
        absolute inset-0 rounded-2xl pointer-events-none
        ${glow ? `shadow-[inset_0_0_20px_rgba(255,255,255,0.05)]` : ''}
        ${hoverEffect ? 'group-hover:shadow-[inset_0_0_40px_rgba(255,255,255,0.1)]' : ''}
        transition-shadow duration-500
      `} />

      {/* Content */}
      {children}
    </div>
  );
};


export default Card;