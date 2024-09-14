import React from "react";
import { Layout, Menu } from "../components";

const AboutPage = () => {
  const menuItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Layout>
      <Menu
        items={menuItems}
        logo={<span className="text-xl font-bold">ReactSpark</span>}
        className="mb-8"
      />
      <div className="max-w-4xl mx-auto p-6 font-sans">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
        <p className="text-gray-600 mb-4">
          Welcome to ReactSpark! We are a passionate team dedicated to creating
          innovative React applications and components.
        </p>
        <p className="text-gray-600 mb-4">
          Our mission is to provide developers with powerful, reusable, and
          customizable React components to accelerate their development process.
        </p>
        <p className="text-gray-600">
          Whether you're building a small project or a large-scale application,
          ReactSpark is here to help you create beautiful and functional user
          interfaces.
        </p>
      </div>
    </Layout>
  );
};

export default AboutPage;