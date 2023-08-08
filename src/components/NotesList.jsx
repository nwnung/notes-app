import { useState } from "react";
import { useNotes } from "../hooks/useNotes";
import NoteCard from "./NoteCard";
import EditMode from "./EditMode";

const NotesList = () => {
  const { notes, updateNote, deleteNote } = useNotes();

  const [editMode, setEditMode] = useState(null);

  const handleEdit = (noteId) => {
    setEditMode(noteId);
  };

  const handleSaveEdit = (taskId, editedNote) => {
    updateNote(taskId, editedNote);
    setEditMode(null);
  };

  return (
    <>
      <h1 className="text-white text-xl mb-5 text-center">Note List</h1>
      {notes.length ? (
        <div className="grid items-center grid-flow-row-dense md:grid-flow-row-dense gap-2 md:max-w-[80vw] justify-center">
          {notes.map((note) =>
            editMode === note.id ? (
              <EditMode note={note} onSaveEdit={handleSaveEdit} key={note.id} />
            ) : (
              <NoteCard
                key={note.id}
                deleteNote={deleteNote}
                handleEdit={handleEdit}
                note={note}
              />
            )
          )}
        </div>
      ) : (
        <p className="text-white text-center">Not Notes Founded...</p>
      )}
    </>
  );
};

export default NotesList;
