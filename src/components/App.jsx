import React, { useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(localStorage.getItem("data") ? JSON.parse(localStorage.getItem("data")) : []);
  function addNote(note) {
    setNotes((prevList) => {
      return [...prevList, note];
    });
  }
  function deleteNote(id) {
    setNotes(() => {
      return notes.filter((note, ind) => {
        return id !== ind;
      })
    });
  }
  localStorage.setItem("data", JSON.stringify(notes));
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      <div className="note-container">
        {notes.map((note, index) => {
          return <Note title={note.title} content={note.content} id={index} key={index} onDelete={deleteNote}/>;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
