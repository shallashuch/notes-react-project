import React, { useState } from "react";
import "./scss/App.scss";
import CreateNote from "./CreateNote";
import AddedNote from "./AddedNote";

function App() {
  let [title, setTitle] = useState("");
  let [content, setContent] = useState("");
  let [notes, setNotes] = useState([]);

  function changeTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function changeContent(event) {
    const newContent = event.target.value;
    setContent(newContent);
  }

  function submitNote(event) {
    event.preventDefault();
    setNotes((prevNotes) => {
      return [...prevNotes, {title: title, content: content}];
    });
    setTitle("");
    setContent("");
  }

  function deleteItem(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      })
    })
  }


  return (
    <div className="App">
      <h1 className="App-title">YOUR NOTES</h1>
      <CreateNote 
        changeTitle={changeTitle}
        valueTitle={title}
        changeContent={changeContent}
        valueContent={content}
        submitNote={submitNote}
      />
      {notes.map((note, index) => (
        <AddedNote 
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          delete={deleteItem}
        />
      ))}
    </div>
  );
}

export default App;