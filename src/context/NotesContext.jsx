import { createContext, useEffect, useState } from "react";

export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notes = localStorage.getItem("notes");
    const parsed = JSON.parse(notes);
    console.log(parsed);
    setNotes(parsed);
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const createNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    setNotes([...notes.filter((note) => note.id !== id)]);
  };

  const updateNote = (noteId, updatedNote) => {
    const updated = notes.map((note) =>
      note.id === noteId ? { ...note, ...updatedNote } : note
    );
    setNotes(updated);
  };

  return (
    <NotesContext.Provider
      value={{ notes, createNote, deleteNote, updateNote }}
    >
      {children}
    </NotesContext.Provider>
  );
};
