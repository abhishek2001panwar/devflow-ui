import React from 'react';
export type CardProps = {
    title: string;
    description?: string;
    children?: React.ReactNode;
  };
  
  export const Card = ({ title, description, children }: CardProps) => (
    <div className="rounded-xl border p-6 shadow hover:shadow-lg transition">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {description && <p className="text-gray-500">{description}</p>}
      <div className="mt-4">{children}</div>
    </div>
  );
  