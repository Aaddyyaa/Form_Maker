import { useForm } from "../../context/FormContext";
import FieldRenderer from "./FieldRenderer";
import "./FormPreview.css";

const FormPreview = () => {
  const { fields } = useForm();

  return (
    <div className="form-preview">
      <h2>Live Preview</h2>

      {fields.length === 0 ? (
        <p>No fields added.</p>
      ) : (
        <form>
          {fields.map((field) => (
            <div className="preview-field" key={field.id}>
              <label>
                {field.label}

                {field.required && (
                  <span className="required">*</span>
                )}
              </label>

              {field.description && (
                <small>{field.description}</small>
              )}

              <FieldRenderer field={field} />
            </div>
          ))}
        </form>
      )}
    </div>
  );
};

export default FormPreview;