import type { FormField } from "../types/form";

interface FormPreviewProps {
  fields: FormField[];
}

function FormPreview({ fields }: FormPreviewProps) {
  return (
    <div className="preview">
      <h1>Preview</h1>

      {fields.length === 0 && <p>No fields added yet.</p>}

      {fields.map((field) => (
        <div key={field.id} style={{ marginBottom: "20px" }}>
          <label
            style={{
              display: "block",
              marginBottom: "6px",
              fontWeight: "bold",
            }}
          >
            {field.label}
          </label>

          {field.type === "text" && (
            <input
              type="text"
              placeholder={field.placeholder}
            />
          )}

          {field.type === "email" && (
            <input
              type="email"
              placeholder={field.placeholder}
            />
          )}

          {field.type === "number" && (
            <input
              type="number"
              placeholder={field.placeholder}
            />
          )}

          {field.type === "date" && (
            <input type="date" />
          )}

          {field.type === "dropdown" && (
            <select>
              <option>Select...</option>
            </select>
          )}
        </div>
      ))}
    </div>
  );
}

export default FormPreview;