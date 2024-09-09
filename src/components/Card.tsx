import React from "react";

interface CardProps {
  title?: string;
  className?: string;
  children: React.ReactNode;
}

const Card = ({ title, className = "", children }: CardProps) => {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 ${className}`}>
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      {children}
    </div>
  );
};

export default Card;
