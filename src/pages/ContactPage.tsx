import { Button, Input, Card, Menu } from "react-spark-ui";
import MenuLink from "../components/MenuLink";
import { menuItems } from "../utils/menuConfig";
import UserProfile from "../components/UserProfile";
const ContactPage = () => {
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
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h1>
          <Card className="bg-white rounded-lg shadow-md p-6">
            <form>
              <Input
                type="text"
                name="name"
                label="Your Name"
                placeholder="John Doe"
                className="mb-4"
              />
              <Input
                type="email"
                name="email"
                label="Your Email"
                placeholder="john@example.com"
                className="mb-4"
              />
              <Input
                type="textarea"
                name="message"
                label="Your Message"
                placeholder="Type your message here..."
                className="mb-4"
              />
              <Button
                onClick={() => alert("Message sent!")}
                className="btn-primary"
                disabled
              >
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
