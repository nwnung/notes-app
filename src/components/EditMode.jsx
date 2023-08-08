import { useForm } from "react-hook-form";

const editMode = ({ note, onSaveEdit }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    onSaveEdit(note.id, data);
  };

  return (
    <form
      className="p-4 rounded border-gray-900 border bg-gray-200 flex flex-col gap-2 max-w-[300px] items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-lg font-semibold">Update Note</h3>
      <input
        type="text"
        {...register("name")}
        className="rounded-lg p-1 focus:outline-none pl-4"
      />
      <input
        type="text"
        {...register("description")}
        className="rounded-lg p-1 focus:outline-none pl-4"
      />
      <button type="submit">Update Note</button>
    </form>
  );
};

export default editMode;
