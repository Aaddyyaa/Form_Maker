import type { FieldType } from "../../types/form";
import { useForm } from "../../context/FormContext";
import "./BuilderSidebar.css";

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
    <div className="builder-sidebar">
      <h2>Add Fields</h2>

      {fieldTypes.map((field) => (
        <button
          key={field.type}
          onClick={() => addField(field.type)}
          className="sidebar-button"
        >
          + {field.label}
        </button>
      ))}
    </div>
  );
};

export default BuilderSidebar;