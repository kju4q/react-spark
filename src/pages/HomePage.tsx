import React, { useState } from "react";
import { Card, Button, Input } from "../components";

const HomePage = () => {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to ReactSpark</h1>
      <Card title="Sample Card">
        <p className="mb-4">This is a sample card component.</p>
        <Button onClick={() => alert("Button clicked!")}>Click me</Button>
      </Card>
      <Card title="Input Example">
        <Input
          type="text"
          name="sample"
          label="Sample Input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type something..."
        />
        <p className="mt-2">You typed: {inputValue}</p>
      </Card>
    </div>
  );
};

export default HomePage;
