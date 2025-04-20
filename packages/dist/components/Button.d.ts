import * as React from 'react';
type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'gradient';
    size?: 'sm' | 'md' | 'lg';
    style?: React.CSSProperties;
    onClick?: () => void;
    icon?: React.ReactNode;
    iconPosition?: 'left' | 'right';
    isLoading?: boolean;
    disabled?: boolean;
};
declare const Button: ({ children, variant, size, style, icon, iconPosition, isLoading, disabled, onClick, ...props }: ButtonProps) => React.JSX.Element;
export { Button, ButtonProps };
