import { useRef } from "react";
import { useForm } from "../../context/FormContext";
import { validateForm } from "../../utils/validators";
import {
  exportForm,
  importForm,
} from "../../services/storage";
import type { FormData } from "../../types/form";

const Toolbar = () => {
  const {
    title,
    description,
    fields,
    setTitle,
    setDescription,
    setFields,
    resetForm,
  } = useForm();

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleValidate = () => {
    const errors = validateForm(fields);

    if (errors.length === 0) {
      alert("✅ Form is valid!");
      return;
    }

    alert(errors.join("\n"));
  };

  const handleExport = () => {
    const form: FormData = {
      title,
      description,
      fields,
    };

    exportForm(form);
  };

  const handleImport = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      const form = await importForm(file);

      setTitle(form.title);
      setDescription(form.description);
      setFields(form.fields);

      alert("✅ Form imported successfully!");
    } catch {
      alert("Invalid JSON file.");
    }

    event.target.value = "";
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

        <p className="mt-3 text-sm text-green-600">
          💾 Auto Saved
        </p>

      </div>

      <div className="flex gap-3 ml-8 flex-wrap">

        <button
          onClick={handleValidate}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg font-semibold"
        >
          Validate
        </button>

        <button
          onClick={handleExport}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold"
        >
          Export
        </button>

        <button
          onClick={() => fileInputRef.current?.click()}
          className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-3 rounded-lg font-semibold"
        >
          Import
        </button>

        <button
          onClick={resetForm}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg font-semibold"
        >
          Reset
        </button>

      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept=".json"
        hidden
        onChange={handleImport}
      />

    </div>
  );
};

export default Toolbar;