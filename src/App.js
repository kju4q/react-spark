import React from "react";
import { Input, Card, Button } from "./components";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to ReactSpark</h1>
      <Card title="Sample Card">
        <p>This is a sample card component.</p>
        <Button onClick={() => alert("Button clicked!")}>Click me</Button>
      </Card>

      <Input
        type="text"
        name="sample"
        label="Sample Input"
        placeholder="Type something..."
      />
    </div>
  );
};

export default HomePage;
