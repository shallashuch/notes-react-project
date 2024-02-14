import React from "react";
import "./scss/App.scss";
import CreateNote from "./CreateNote";
import AddedNote from "./AddedNote";

function App() {
  return (
    <div className="App">
    <h1 className="App-title">YOUR NOTES</h1>
      <CreateNote />
      <AddedNote />
    </div>
  );
}

export default App;
