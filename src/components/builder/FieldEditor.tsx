import type { FormField, FieldType } from "../../types/form";
import { useForm } from "../../context/FormContext";
import OptionEditor from "./OptionEditor";
import "./FieldEditor.css";

interface Props {
  field: FormField;
}

const optionFields = ["radio", "checkbox", "select"];

const FieldEditor = ({ field }: Props) => {
  const { updateField, deleteField } = useForm();

  return (
    <div className="field-editor">
      <div className="field-header">
        <h3>{field.label}</h3>

        <button
          className="delete-btn"
          onClick={() => deleteField(field.id)}
        >
          Delete
        </button>
      </div>

      <label>Label</label>

      <input
        value={field.label}
        onChange={(e) =>
          updateField(field.id, {
            label: e.target.value,
          })
        }
      />

      <label>Field Type</label>

      <select
        value={field.type}
        onChange={(e) =>
          updateField(field.id, {
            type: e.target.value as FieldType,
          })
        }
      >
        <option value="text">Text</option>
        <option value="textarea">Textarea</option>
        <option value="email">Email</option>
        <option value="number">Number</option>
        <option value="password">Password</option>
        <option value="date">Date</option>
        <option value="radio">Radio</option>
        <option value="checkbox">Checkbox</option>
        <option value="select">Dropdown</option>
        <option value="file">File Upload</option>
      </select>

      {!optionFields.includes(field.type) && field.type !== "file" && (
        <>
          <label>Placeholder</label>

          <input
            value={field.placeholder || ""}
            onChange={(e) =>
              updateField(field.id, {
                placeholder: e.target.value,
              })
            }
          />
        </>
      )}

      <label>Description</label>

      <input
        value={field.description || ""}
        onChange={(e) =>
          updateField(field.id, {
            description: e.target.value,
          })
        }
      />

      {field.type !== "file" && (
        <>
          <label>Default Value</label>

          <input
            value={field.defaultValue || ""}
            onChange={(e) =>
              updateField(field.id, {
                defaultValue: e.target.value,
              })
            }
          />
        </>
      )}

      {optionFields.includes(field.type) && (
        <OptionEditor field={field} />
      )}

      <div className="required-row">
        <input
          type="checkbox"
          checked={field.required}
          onChange={(e) =>
            updateField(field.id, {
              required: e.target.checked,
            })
          }
        />

        <span>Required</span>
      </div>
    </div>
  );
};

export default FieldEditor;