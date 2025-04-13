import React from 'react';
export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
  };
  
  export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps) => {
    const base = 'px-4 py-2 font-semibold rounded-xl transition';
    const variants = {
      primary: 'bg-black text-white hover:bg-gray-800',
      secondary: 'bg-white border border-black text-black hover:bg-gray-100',
    };
  
    return (
      <button className={`${base} ${variants[variant]} ${className}`} {...props}>
        {children}
      </button>
    );
  };
  