'use client';
import * as React from 'react';

interface ButtonProps {
    name: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({
    name,
    onClick,
    type = 'button',
    disabled = false,
    className = '',
    variant = 'primary',
}) => {
    const styles = {
        button: {
            padding: '10px 20px',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: 500 as const,
            cursor: disabled ? 'not-allowed' : 'pointer',
            border: variant === 'outline' ? '1px solid #3498db' : 'none',
            backgroundColor: 
                variant === 'primary' ? '#3498db' : 
                variant === 'secondary' ? '#2ecc71' : 
                'transparent',
            color: variant === 'outline' ? '#3498db' : 'white',
            boxShadow: variant !== 'outline' ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'all 0.2s ease',
            opacity: disabled ? 0.6 : 1,
            outline: 'none',
            position: 'relative' as const,
            overflow: 'hidden' as const,
        }
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={className}
            style={styles.button}
        >
            {name}
        </button>
    );
};

export  {Button};