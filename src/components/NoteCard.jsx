const NoteCard = ({ deleteNote, handleEdit, note }) => {
  return (
    <div className="w-[80vw] md:w-fit md:max-w-[55vw] py-5 rounded bg-gray-200 flex md:justify-between px-6 gap-12">
      <div className="flex flex-col gap-2">
        <span className="font-semibold">{note.name}</span>
        <span>{note.description}</span>
      </div>
      <div className="flex gap-2 items-center">
        {/* <Options /> */}
        <button
          className="border-[1px] border-slate-900 px-5 py-1 rounded-md"
          onClick={() => handleEdit(note.id)}
        >
          Edit
        </button>
        <button
          className="border-[1px] border-red-900 px-5 py-1 rounded-md"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;