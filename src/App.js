import React from "react";
import "./App.css";
import ActionComponent from "./components/ActionComponent";
import OutputComponent from "./components/OutputComponent";
import TextBox from "./components/TextBox";
import ViewTextInput from "./components/ViewTextInput";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <OutputComponent />
        <ActionComponent />
        <ViewTextInput />
        <TextBox />
      </header>
    </div>
  );
}

export default App;
