import { useForm } from "react-hook-form";
import { useNotes } from "../hooks/useNotes";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const NotesForm = () => {
  const { notes, createNote } = useNotes();

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const notify = () => toast("Added note ✅");

  const onSubmit = (data) => {
    createNote({
      ...data,
      id: notes.length + 1,
      color: ["bg-red-300", "bg-orange-300", "bg-neutral-500", "bg-slate-900"],
    });
    notify();
    setTimeout(() => {
      navigate("/");
    }, 800);
  };

  return (
    <form
      className="w-[250px] mt-4 p-4 rounded bg-gray-100 mx-auto mb-12 flex flex-col gap-2 text-sm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        type="text"
        placeholder="Add note"
        autoFocus
        {...register("name", {
          required: true,
        })}
        className="pl-4 text-white bg-black/90 py-1 rounded-lg p-4 focus:outline-none"
      />
      <textarea
        type="text"
        rows={5}
        placeholder="Add Description"
        {...register("description")}
        className="pl-4 text-white bg-black/90 py-1 rounded-lg p-4 focus:outline-none "
      />
      <button
        type="submit"
        className="bg-green-500 rounded w-fit mx-auto px-5 py-1"
      >
        Add
      </button>
      <button
        type="reset"
        className="bg-red-400 px-4 py-1 w-fit mx-auto rounded"
      >
        Reset
      </button>
      <Toaster
        position="bottom-right"
        toastOptions={{
          className: "bg-zinc-800 text-white font-semibold",
        }}
      />
    </form>
  );
};

export default NotesForm;
