import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
};
declare const Button: ({ children, variant, className, ...props }: ButtonProps) => React.JSX.Element;

type CardProps = {
    title: string;
    description?: string;
    children?: React.ReactNode;
};
declare const Card: ({ title, description, children }: CardProps) => React.JSX.Element;

export { Button, ButtonProps, Card, CardProps };
