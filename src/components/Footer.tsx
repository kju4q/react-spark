import React from "react";

type FooterLink = {
  text: string;
  href: string;
};

type FooterProps = {
  companyName?: string;
  copyrightYear?: number;
  links?: FooterLink[];
  className?: string;
  children?: React.ReactNode;
};

const Footer = ({
  companyName = "ReactSpark",
  copyrightYear = new Date().getFullYear(),
  links = [],
}: FooterProps) => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">
          &copy; {copyrightYear} {companyName}. All rights reserved.
        </p>
        {links.length > 0 && (
          <nav className="mt-2 md:mt-0">
            <ul className="flex space-x-4">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm hover:text-gray-300 transition-colors duration-200"
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </footer>
  );
};

export default Footer;
