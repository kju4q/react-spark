import { Button, Input, Card, Layout, Menu } from "react-spark-ui";
import MenuLink from "../components/MenuLink";
import "../styles/styles.scss";
import "react-spark-ui/dist/index.css";

type User = {
  id: number;
  name: string;
  email: string;
  role: string;
};

const HomePage = () => {
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
        LinkComponent={MenuLink}
      />
      <div className="max-w-4xl mx-auto p-6 font-sans">
        <main className="flex flex-col gap-12"></main>
      </div>
    </Layout>
  );
};

export default HomePage;
