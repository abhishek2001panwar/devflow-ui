import Image from 'next/image';
import React from 'react';
import { Button } from './Button';

export type JobCardProps = {
// Company information
companyName: string;
companyLogo?: string | React.ReactNode;
postedTime?: string;

  // Job details
  jobTitle: string;
  jobTags?: string[];
  
  // Location and salary
  salary?: string;
  location?: string;
  
  // Actions
  primaryActionLabel?: string;
  primaryActionHref?: string;
  isSaved?: boolean;
  
  // Customization
  className?: string;
  tagClassName?: string;
  titleClassName?: string;
  accentColor?: string;
};

export const Card = ({
  companyName,
  companyLogo,
  postedTime,
  jobTitle,
  jobTags = [],
  salary,
  location,
  primaryActionLabel = "Apply now",
  primaryActionHref = "#",
  isSaved = false,
  className = "",
  tagClassName = "",
  titleClassName = "",
 
}: JobCardProps) => {
  
  // Placeholder logo if none provided
  const logoPlaceholder = companyLogo || "/api/placeholder/48/48";
  
  return (
    <div className={`bg-white rounded-md p-4 border border-gray-200 shadow-sm w-full max-w-md ${className}`}>
      {/* Header with company info */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <div className="  rounded-full overflow-hidden flex-shrink-0 text-2xl">
            {typeof logoPlaceholder === 'string' ? (
              <Image 
                src={logoPlaceholder} 
                alt={`${companyName} logo`} 
                width={48} 
                height={48} 
                className="object-cover w-full h-full" 
              />
            ) : (
              logoPlaceholder
            )}
          </div>
          <div className="ml-3">
            <h3 className="font-medium text-gray-900">{companyName}</h3>
            {postedTime && (
              <p className="text-gray-500 text-sm">{postedTime}</p>
            )}
          </div>
        </div>
        
        {/* Save indicator (static in server component) */}
        <div className="bg-gray-100 px-4 py-2 rounded-lg flex items-center">
          <span className="mr-1">Saved</span>
          <svg 
            viewBox="0 0 24 24" 
            fill={isSaved ? "currentColor" : "none"} 
            stroke="currentColor" 
            className="w-5 h-5"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" 
            />
          </svg>
        </div>
      </div>
      
      {/* Job title */}
      <h2 className={`text-2xl font-bold mb-4 text-gray-900 ${titleClassName}`}>
        {jobTitle}
      </h2>
      
      {/* Job tags */}
      {jobTags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {jobTags.map((tag, index) => (
            <span 
              key={index} 
              className={`bg-gray-100 px-3 py-1.5 rounded-lg text-gray-800 inline-block ${tagClassName}`}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
      
      {/* Divider */}
      <div className="border-t border-gray-200 my-4"></div>
      
      {/* Salary and location */}
      <div className="flex justify-between items-center mb-1">
        <div>
          {salary && (
            <p className="text-lg font-bold text-gray-900">{salary}</p>
          )}
          {location && (
            <p className="text-gray-500">{location}</p>
          )}
        </div>
        
        {/* Apply button */}
        {primaryActionLabel && (
          <a href={primaryActionHref} className="inline-block">
            <Button 
              variant="gradient"
              size="md"
              className="font-medium"
             
            >
              {primaryActionLabel}
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};