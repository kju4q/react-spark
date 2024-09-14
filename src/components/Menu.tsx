import React from "react";
import { Link } from "react-router-dom";

type MenuItem = {
  label: string;
  path: string;
};

type MenuProps = {
  items: MenuItem[];
  logo?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  activeColor?: string;
  className?: string;
};

const Menu = ({
  items,
  logo,
  backgroundColor = "bg-white",
  textColor = "text-gray-700",
  hoverColor = "hover:bg-gray-200",
  activeColor = "bg-gray-200",
  className = "",
}: MenuProps) => {
  const currentPath = window.location.pathname;

  return (
    <nav className={`${backgroundColor} shadow-md ${className}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {logo && <div className="flex-shrink-0">{logo}</div>}
          <div className="flex space-x-4">
            {items.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  ${textColor} 
                  ${hoverColor} 
                  ${currentPath === item.path ? activeColor : ""}
                  px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
