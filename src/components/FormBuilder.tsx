import type { Dispatch, SetStateAction } from "react";
import type { FormField, FieldType } from "../types/form";

interface FormBuilderProps {
  fields: FormField[];
  setFields: Dispatch<SetStateAction<FormField[]>>;
}

function FormBuilder({ fields, setFields }: FormBuilderProps) {
  // Add a new field
  const addField = () => {
    const newField: FormField = {
      id: crypto.randomUUID(),
      label: "Untitled",
      type: "text",
      required: false,
      placeholder: "",
      options: [],
    };

    setFields([...fields, newField]);
  };

  // Update Label
  const updateLabel = (id: string, value: string) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, label: value } : field
      )
    );
  };

  // Update Type
  const updateType = (id: string, type: FieldType) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, type } : field
      )
    );
  };

  // Update Placeholder
  const updatePlaceholder = (id: string, placeholder: string) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, placeholder } : field
      )
    );
  };

  // Toggle Required
  const toggleRequired = (id: string) => {
    setFields(
      fields.map((field) =>
        field.id === id
          ? { ...field, required: !field.required }
          : field
      )
    );
  };

  // Delete Field
  const deleteField = (id: string) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div className="builder">
      <h1>Form Builder</h1>

      <button onClick={addField}>+ Add Field</button>

      {fields.map((field) => (
        <div className="field" key={field.id}>
          {/* Label */}
          <label>Label</label>

          <input
            type="text"
            value={field.label}
            onChange={(e) =>
              updateLabel(field.id, e.target.value)
            }
          />

          {/* Field Type */}
          <label>Field Type</label>

          <select
            value={field.type}
            onChange={(e) =>
              updateType(field.id, e.target.value as FieldType)
            }
          >
            <option value="text">Text</option>
            <option value="email">Email</option>
            <option value="number">Number</option>
            <option value="date">Date</option>
            <option value="dropdown">Dropdown</option>
          </select>

          {/* Placeholder */}
          <label>Placeholder</label>

          <input
            type="text"
            value={field.placeholder}
            onChange={(e) =>
              updatePlaceholder(field.id, e.target.value)
            }
          />

          {/* Required */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "15px",
            }}
          >
            <input
              type="checkbox"
              checked={field.required}
              onChange={() => toggleRequired(field.id)}
            />

            <span>Required</span>
          </div>

          {/* Delete */}
          <button
            style={{
              marginTop: "15px",
              background: "crimson",
            }}
            onClick={() => deleteField(field.id)}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default FormBuilder;