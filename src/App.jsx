import { useEffect } from "react";
import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";

function App() {
  useEffect(() => {
    localStorage.getItem("notes");
  }, []);
  return (
    <div className="bg-zinc-900 min-h-screen p-6 relative">
      <NotesForm />
      <NotesList />
      <a
        href="https://github.com/nwnung"
        className="text-sm text-neutral-400 hover:text-white transition absolute bottom-6"
      >
        @nwnung
      </a>
    </div>
  );
}

export default App;
