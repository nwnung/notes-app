// import NotesForm from "./components/NotesForm";
import NotesList from "./components/NotesList";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="bg-zinc-900 min-h-screen p-6 relative">
      {/* <NotesForm /> */}
      <Link to={"/new"} className="px-4 py-1 bg-green-400 rounded">
        Add Note
      </Link>
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
