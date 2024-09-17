import React from "react";
import { Link } from "react-router-dom";
import { Button, Footer } from "react-spark-ui";

type LayoutProps = React.PropsWithChildren<{
  // Add any additional props here if needed
}>;

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
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
