import type { FieldType } from "../../types/form";
import { useForm } from "../../context/FormContext";

const fieldTypes: {
  label: string;
  type: FieldType;
}[] = [
  { label: "Text", type: "text" },
  { label: "Textarea", type: "textarea" },
  { label: "Email", type: "email" },
  { label: "Number", type: "number" },
  { label: "Password", type: "password" },
  { label: "Date", type: "date" },
  { label: "Radio", type: "radio" },
  { label: "Checkbox", type: "checkbox" },
  { label: "Dropdown", type: "select" },
  { label: "File Upload", type: "file" },
];

const BuilderSidebar = () => {
  const { addField } = useForm();

  return (
    <div className="w-72 bg-white border-r p-6 overflow-y-auto">

      <h2 className="text-xl font-bold mb-6">
        Add Fields
      </h2>

      <div className="space-y-3">

        {fieldTypes.map((field) => (
          <button
            key={field.type}
            onClick={() => addField(field.type)}
            className="w-full rounded-lg bg-blue-600 hover:bg-blue-700 text-white p-3 font-medium transition"
          >
            + {field.label}
          </button>
        ))}

      </div>

    </div>
  );
};

export default BuilderSidebar;