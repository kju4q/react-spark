import { Menu } from "react-spark-ui";
import { menuItems } from "../utils/menuConfig";
import MenuLink from "../components/MenuLink";
import UserProfile from "../components/UserProfile";
import "../styles/styles.scss";
import "react-spark-ui/dist/index.css";

const HomePage = () => {
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
        className="w-64"
        LinkComponent={MenuLink}
      />
      <div className="flex-grow flex flex-col">
        <UserProfile user={user} />
        <hr style={{ borderColor: "#F0F2F5" }} />
        <div className="flex-grow p-8">
          <h2>Welcome to home page</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
