import { Button, Input, Card, Layout, Menu } from "react-spark-ui";
import MenuLink from "../components/MenuLink";

const ContactPage = () => {
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
            >
              Send Message
            </Button>
          </form>
        </Card>
      </div>
    </Layout>
  );
};

export default ContactPage;
