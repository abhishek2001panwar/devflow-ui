import * as React from 'react';
import { useState } from 'react';

const Button = ({ children, variant = 'primary', size = 'md', style, icon, iconPosition = 'left', isLoading = false, disabled = false, onClick, ...props }) => {
    const [isHovered, setIsHovered] = useState(false);
    // Base styles
    const baseStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 600,
        borderRadius: '0.375rem',
        transition: 'all 300ms',
        cursor: disabled ? 'not-allowed' : 'pointer',
    };
    // Variant styles
    const variantStyle = (() => {
        switch (variant) {
            case 'primary':
                return {
                    backgroundColor: isHovered ? '#1f2937' : 'black',
                    color: 'white',
                    boxShadow: isHovered
                        ? '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)'
                        : '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.05)',
                    transform: isHovered && !disabled ? 'translateY(-2px)' : 'none',
                };
            case 'secondary':
                return {
                    backgroundColor: isHovered ? 'rgba(0,0,0,0.05)' : 'transparent',
                    border: '2px solid black',
                    color: 'black',
                    transform: isHovered && !disabled ? 'translateY(-2px)' : 'none',
                };
            case 'gradient':
                return {
                    background: isHovered
                        ? 'linear-gradient(to right, #7e22ce, #2563eb)'
                        : 'linear-gradient(to right, #9333ea, #3b82f6)',
                    color: 'white',
                    boxShadow: isHovered
                        ? '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)'
                        : '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.05)',
                    transform: isHovered && !disabled ? 'translateY(-2px)' : 'none',
                };
            default:
                return {};
        }
    })();
    // Size styles
    const sizeStyle = (() => {
        switch (size) {
            case 'sm': return { padding: '0.25rem 0.75rem', fontSize: '0.875rem' };
            case 'lg': return { padding: '0.75rem 1.5rem', fontSize: '1.125rem' };
            default: return { padding: '0.5rem 1rem' }; // md
        }
    })();
    // Disabled styles
    const disabledStyle = disabled ? {
        opacity: 0.6,
        pointerEvents: 'none',
        transform: 'none',
    } : {};
    return (React.createElement(React.Fragment, null,
        React.createElement("style", null, `
                @keyframes spin { 
                    to { transform: rotate(360deg); } 
                }
            `),
        React.createElement("button", { style: {
                ...baseStyle,
                ...variantStyle,
                ...sizeStyle,
                ...disabledStyle,
                ...style
            }, disabled: disabled || isLoading, onClick: onClick, onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), ...props },
            isLoading && (React.createElement("svg", { style: {
                    animation: 'spin 1s linear infinite',
                    marginRight: '0.5rem',
                    marginLeft: '-0.25rem',
                    height: '1rem',
                    width: '1rem',
                }, xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24" },
                React.createElement("circle", { style: { opacity: 0.25 }, cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
                React.createElement("path", { style: { opacity: 0.75 }, fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" }))),
            icon && iconPosition === 'left' && !isLoading && (React.createElement("span", { style: { marginRight: '0.5rem' } }, icon)),
            React.createElement("span", null, children),
            icon && iconPosition === 'right' && (React.createElement("span", { style: { marginLeft: '0.5rem' } }, icon)))));
};

export { Button };
