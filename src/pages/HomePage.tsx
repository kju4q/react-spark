import React, { useState } from "react";
import { Card, Button, Input, Layout } from "../components";
import "../styles/styles.scss";

const HomePage = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 font-sans">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome to ReactSpark
          </h1>
        </header>
        <main className="flex flex-col md:flex-row gap-6 mb-12">
          <Card className="flex-1 bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              Get Started
            </h2>
            <p className="text-gray-600 mb-4">
              Begin your journey with ReactSpark by exploring our features.
            </p>
            <Button onClick={() => alert("Let's go!")} className="btn-primary">
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
        </main>
        <footer className="text-center text-gray-500">
          <p>© 2023 ReactSpark. All rights reserved.</p>
        </footer>
      </div>
    </Layout>
  );
};

export default HomePage;
