import React from "react";
import { Layout, Menu, Table } from "../components";
import { Button, Header, Input, Card } from "react-spark-ui";
import "../styles/styles.scss";

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

  const tableData: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
  ];

  const tableColumns = [
    { header: "ID", accessor: "id" as const },
    { header: "Name", accessor: "name" as const },
    { header: "Email", accessor: "email" as const },
    { header: "Role", accessor: "role" as const },
  ];
  return (
    <Layout>
      <Menu
        items={menuItems}
        logo={<span className="text-xl font-bold">ReactSpark</span>}
        className="mb-8"
      />
      <div className="max-w-4xl mx-auto p-6 font-sans">
        {/* <Header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to ReactSpark
          </h1>
        </Header> */}
        <main className="flex flex-col gap-12">
          <section className="flex flex-col md:flex-row gap-6">
            <Card className="flex-1 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Get Started
              </h2>
              <p className="text-gray-600 mb-4">
                Begin your journey with ReactSpark by exploring our features.
              </p>
              <Button
                onClick={() => alert("Let's go!")}
                className="btn-primary"
              >
                Explore Now
              </Button>
            </Card>
            <Card className="flex-1 bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Quick Input
              </h2>
              <Input
                type="text"
                name="sample"
                label="What's on your mind?"
                placeholder="Type something inspiring..."
                className="mb-4"
              />
              <Button
                onClick={() => alert("Input submitted!")}
                className="btn-secondary"
              >
                Submit
              </Button>
            </Card>
          </section>
          <section>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Sample Table
            </h2>
            <Table
              data={tableData}
              columns={tableColumns}
              className="shadow-md rounded-lg"
              headerClassName="bg-gray-100"
            />
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default HomePage;
