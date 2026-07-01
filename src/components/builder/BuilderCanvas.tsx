import { useForm } from "../../context/FormContext";
import FieldEditor from "./FieldEditor";
import "./BuilderCanvas.css";

const BuilderCanvas = () => {
  const { fields } = useForm();

  return (
    <div className="builder-canvas">
      <h2>Form Builder</h2>

      {fields.length === 0 ? (
        <div className="empty-state">
          No fields added yet.
          <br />
          Select a field from the left sidebar.
        </div>
      ) : (
        fields.map((field) => (
          <FieldEditor
            key={field.id}
            field={field}
          />
        ))
      )}
    </div>
  );
};

export default BuilderCanvas;