// import { Menu } from "../components";
// TODO: Remove about page and contact page from react spark, and find a solution for the menu

import { Menu } from "react-spark-ui";
import MenuLink from "../components/MenuLink";
import { menuItems } from "../utils/menuConfig";
import UserProfile from "../components/UserProfile";

const AboutPage = () => {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
  };

  return (
    <div className="flex">
      <Menu
        items={menuItems}
        logo={<span className="text-xl font-bold">ReactSpark</span>}
        className="mb-8"
        LinkComponent={MenuLink}
      />
      <div className="flex-grow flex flex-col">
        <UserProfile user={user} />
        <hr style={{ borderColor: "#F0F2F5" }} />

        <div className="flex-grow p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Us</h1>
          <p className="text-gray-600 mb-4">
            Welcome to ReactSpark! We are a passionate team dedicated to
            creating innovative React applications and components.
          </p>
          <p className="text-gray-600 mb-4">
            Our mission is to provide developers with powerful, reusable, and
            customizable React components to accelerate their development
            process.
          </p>
          <p className="text-gray-600">
            Whether you're building a small project or a large-scale
            application, ReactSpark is here to help you create beautiful and
            functional user interfaces.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
