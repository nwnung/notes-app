import { useEffect } from "react";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";

function App() {
  useEffect(() => {
    localStorage.getItem("notes");
  }, []);
  return (
    <div className="bg-zinc-900 min-h-screen p-6">
      <NotesForm />
      <NotesList />
    </div>
  );
}

export default App;
