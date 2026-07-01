import type { FormField } from "../../types/form";
import { useForm } from "../../context/FormContext";
import "./OptionEditor.css";

interface Props {
  field: FormField;
}

const OptionEditor = ({ field }: Props) => {
  const { updateField } = useForm();

  const options = field.options || [];

  const updateOption = (index: number, value: string) => {
    const updated = [...options];
    updated[index] = value;

    updateField(field.id, {
      options: updated,
    });
  };

  const addOption = () => {
    updateField(field.id, {
      options: [...options, `Option ${options.length + 1}`],
    });
  };

  const deleteOption = (index: number) => {
    const updated = options.filter((_, i) => i !== index);

    updateField(field.id, {
      options: updated,
    });
  };

  return (
    <div className="option-editor">
      <h4>Options</h4>

      {options.map((option, index) => (
        <div className="option-row" key={index}>
          <input
            value={option}
            onChange={(e) => updateOption(index, e.target.value)}
          />

          <button
            className="delete-option"
            onClick={() => deleteOption(index)}
          >
            ✕
          </button>
        </div>
      ))}

      <button className="add-option" onClick={addOption}>
        + Add Option
      </button>
    </div>
  );
};

export default OptionEditor;