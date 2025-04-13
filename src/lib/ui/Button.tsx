import React from 'react';

export type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
    disabled?: boolean;
};

export const Button = ({ 
    children, 
    variant = 'primary', 
    size = 'md',
    className, 
    icon,
    iconPosition = 'left',
    isLoading = false,
    disabled = false,
    ...props 
}: ButtonProps) => {
    const base = 'flex items-center justify-center font-semibold rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
        primary: 'bg-black text-white hover:bg-gray-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-black',
        secondary: 'bg-transparent border-2 border-black text-black hover:bg-black/5 hover:-translate-y-0.5 focus:ring-black/30',
        gradient: 'bg-gradient-to-r from-purple-600 to-blue-500 text-white hover:from-purple-700 hover:to-blue-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 focus:ring-purple-500',
    };
    
    const sizes = {
        sm: 'px-3 py-1 text-sm',
        md: 'px-4 py-2',
        lg: 'px-6 py-3 text-lg',
    };
    
    const disabledClass = disabled ? 'opacity-60 cursor-not-allowed transform-none' : '';
    
    return (
        <button 
            className={`${base} ${variants[variant]} ${sizes[size]} ${disabledClass} ${className || ''}`}
            disabled={disabled || isLoading}
            {...props}
        >
            {isLoading && (
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            )}
            
            {icon && iconPosition === 'left' && !isLoading && <span className="mr-2">{icon}</span>}
            <span>{children}</span>
            {icon && iconPosition === 'right' && <span className="ml-2">{icon}</span>}
        </button>
    );
};
