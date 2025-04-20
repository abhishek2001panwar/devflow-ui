import * as React from 'react';
interface ButtonProps {
    name: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    className?: string;
    variant?: 'primary' | 'secondary' | 'outline';
}
declare const Button: React.FC<ButtonProps>;
export default Button;
