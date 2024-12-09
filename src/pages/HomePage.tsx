import { Menu } from "react-spark-ui";
import { menuItems } from "../utils/menuConfig";
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
  const user: User = {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "User",
  };

  return (
    <>
      <div className="flex">
        <Menu
          items={menuItems}
          logo={<span className="text-xl font-bold">ReactSpark</span>}
          className="w-64"
          LinkComponent={MenuLink}
        />
        <div className="flex-grow flex flex-col">
          <div className="flex justify-end items-center p-4 ">
            <span className="mr-2">{user.name}</span>
            <img
              src="https://api.dicebear.com/6.x/lorelei/png?seed=SparkAnime" // Anime-style avatar API
              alt={user.name}
              className="w-8 h-8 rounded-full"
              loading="lazy"
              onError={(e) =>
                (e.currentTarget.src = "https://via.placeholder.com/32")
              }
            />
          </div>
          <hr style={{ borderColor: "#F0F2F5" }} />
          <div className="flex-grow p-8">
            <h2>Welcome to home page</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
