import { Menu } from "react-spark-ui";
import { menuItems } from "../utils/menuConfig";
import MenuLink from "../components/MenuLink";
import "../styles/styles.scss";
import "react-spark-ui/dist/index.css";
import PageLayout from "../components/PageLayout";

const HomePage = () => {
  return (
    <div className="flex">
      <Menu
        items={menuItems}
        logo={<span className="text-xl font-bold">ReactSpark</span>}
        className="w-64"
        LinkComponent={MenuLink}
      />
      <PageLayout>
        <div className="flex-grow p-8">
          <h2>Welcome to home page</h2>
        </div>
      </PageLayout>
    </div>
  );
};

export default HomePage;
