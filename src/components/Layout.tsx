import React from "react";
import { Link } from "react-router-dom";
import { Button, Footer } from "react-spark-ui";

type LayoutProps = React.PropsWithChildren<{
  // Add any additional props here if needed
}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-700">
              <Link to="/">ReactSpark</Link>
            </div>
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </div>
            <Button className="md:hidden focus:outline-none">
              <svg
                className="h-6 w-6 fill-current text-gray-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-6 py-8">{children}</main>

      <Footer className="bg-gray-800 text-white">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <p>&copy; 2023 ReactSpark. All rights reserved.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Layout;
