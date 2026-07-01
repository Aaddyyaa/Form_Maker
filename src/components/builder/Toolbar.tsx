import { useForm } from "../../context/FormContext";
import { validateForm } from "../../utils/validators";
import "./Toolbar.css";

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
    <div className="toolbar">

      <div className="toolbar-left">

        <input
          className="form-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Form Title"
        />

        <textarea
          className="form-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Form Description"
        />

      </div>

      <div className="toolbar-right">

        <button
          className="validate-btn"
          onClick={handleValidate}
        >
          Validate
        </button>

        <button
          className="reset-btn"
          onClick={resetForm}
        >
          Reset
        </button>

      </div>

    </div>
  );
};

export default Toolbar;