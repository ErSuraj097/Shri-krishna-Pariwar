import React from 'react';

const Button = ({ children, variant = "default", size = "md", className = "", onClick, ...props }) => {
  const baseClasses = "px-2 py-2 rounded-md  font-semibold relative overflow-hidden";

  const variants = {
    default: "bg-red-800 text-white hover:from-purple-700 hover:via-pink-700",
    outline: "border-1 border-red-800 bg-black/10 text-black  "
  };

  const sizes = {
    lg: "text-sm",
    md: "px-6 py-3"
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
