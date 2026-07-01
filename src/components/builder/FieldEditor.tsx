import type { FormField, FieldType } from "../../types/form";
import { useForm } from "../../context/FormContext";
import OptionEditor from "./OptionEditor";

interface Props {
  field: FormField;
}

const optionFields = ["radio", "checkbox", "select"];

const FieldEditor = ({ field }: Props) => {
  const { updateField, deleteField } = useForm();

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">

      <div className="flex justify-between items-center mb-6">

        <h3 className="text-xl font-semibold">
          {field.label}
        </h3>

        <button
          onClick={() => deleteField(field.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
        >
          Delete
        </button>

      </div>

      <div className="space-y-5">

        <div>
          <label className="font-medium block mb-2">
            Label
          </label>

          <input
            value={field.label}
            onChange={(e) =>
              updateField(field.id, {
                label: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="font-medium block mb-2">
            Field Type
          </label>

          <select
            value={field.type}
            onChange={(e) =>
              updateField(field.id, {
                type: e.target.value as FieldType,
              })
            }
            className="w-full border rounded-lg p-3"
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
        </div>

        {!optionFields.includes(field.type) &&
          field.type !== "file" && (
            <div>
              <label className="font-medium block mb-2">
                Placeholder
              </label>

              <input
                value={field.placeholder || ""}
                onChange={(e) =>
                  updateField(field.id, {
                    placeholder: e.target.value,
                  })
                }
                className="w-full border rounded-lg p-3"
              />
            </div>
          )}

        <div>
          <label className="font-medium block mb-2">
            Description
          </label>

          <input
            value={field.description || ""}
            onChange={(e) =>
              updateField(field.id, {
                description: e.target.value,
              })
            }
            className="w-full border rounded-lg p-3"
          />
        </div>

        {field.type !== "file" && (
          <div>
            <label className="font-medium block mb-2">
              Default Value
            </label>

            <input
              value={field.defaultValue || ""}
              onChange={(e) =>
                updateField(field.id, {
                  defaultValue: e.target.value,
                })
              }
              className="w-full border rounded-lg p-3"
            />
          </div>
        )}

        {optionFields.includes(field.type) && (
          <OptionEditor field={field} />
        )}

        <label className="flex items-center gap-3">

          <input
            type="checkbox"
            checked={field.required}
            onChange={(e) =>
              updateField(field.id, {
                required: e.target.checked,
              })
            }
          />

          Required Field

        </label>

      </div>

    </div>
  );
};

export default FieldEditor;