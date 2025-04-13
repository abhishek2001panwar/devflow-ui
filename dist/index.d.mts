import React from 'react';

type ButtonProps = {
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
declare const Button: ({ children, variant, size, className, icon, iconPosition, isLoading, disabled, ...props }: ButtonProps) => React.JSX.Element;

type JobCardProps = {
    companyName: string;
    companyLogo?: string | React.ReactNode;
    postedTime?: string;
    jobTitle: string;
    jobTags?: string[];
    salary?: string;
    location?: string;
    primaryActionLabel?: string;
    primaryActionHref?: string;
    isSaved?: boolean;
    className?: string;
    tagClassName?: string;
    titleClassName?: string;
    accentColor?: string;
};
declare const Card: ({ companyName, companyLogo, postedTime, jobTitle, jobTags, salary, location, primaryActionLabel, primaryActionHref, isSaved, className, tagClassName, titleClassName, }: JobCardProps) => React.JSX.Element;

export { Button, ButtonProps, Card, JobCardProps };
