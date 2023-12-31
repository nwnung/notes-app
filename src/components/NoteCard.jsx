const NoteCard = ({ deleteNote, handleEdit, note }) => {
  const colors = note.color;

  const random = Math.floor(Math.random() * colors.length);
  const picker = colors[random];

  return (
    <div
      className={`w-[85vw] md:w-fit md:max-w-[55vw] py-5 bg-gray-200 flex md:justify-between px-6 gap-12 relative rounded-xl`}
    >
      <span
        className={`after:content-[' '] absolute top-0 ${picker} h-2 left-0 w-full`}
      ></span>
      <div className="flex flex-col gap-2">
        <span className="font-semibold">{note.name}</span>
        <span className="text-ellipsis">{note.description}</span>
      </div>
      <div className="flex gap-2 items-center text-sm">
        {/* <Options /> */}
        <button
          className="border-[1px] border-slate-900 px-4 py-1 rounded-md"
          onClick={() => handleEdit(note.id)}
        >
          Edit
        </button>
        <button
          className="border-[1px] border-red-900 px-4 py-1 rounded-md"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;
