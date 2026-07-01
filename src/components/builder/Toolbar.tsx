import { useForm } from "../../context/FormContext";
import { validateForm } from "../../utils/validators";

const Toolbar = () => {
  const {
    fields,
    title,
    description,
    setTitle,
    setDescription,
    resetForm,
  } = useForm();

  const handleValidate = () => {
    const errors = validateForm(fields);

    if (errors.length === 0) {
      alert("✅ Form is valid!");
      return;
    }

    alert(errors.join("\n"));
  };

  return (
    <div className="bg-white border-b shadow-sm px-8 py-5 flex justify-between items-start">

      <div className="flex-1 max-w-3xl">

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Form Title"
          className="w-full text-3xl font-bold outline-none border-none mb-3"
        />

        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Form Description..."
          rows={2}
          className="w-full resize-none rounded-lg border border-gray-300 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

      </div>

      <div className="flex gap-3 ml-8">

        <button
          onClick={handleValidate}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold transition"
        >
          Validate
        </button>

        <button
          onClick={resetForm}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold transition"
        >
          Reset
        </button>

      </div>

    </div>
  );
};

export default Toolbar;