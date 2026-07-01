import type { FormField } from "../../types/form";
import { useForm } from "../../context/FormContext";

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
    <div className="border-t pt-5 mt-5">

      <h4 className="text-lg font-semibold mb-4">
        Options
      </h4>

      <div className="space-y-3">

        {options.map((option, index) => (
          <div key={index} className="flex gap-3">

            <input
              value={option}
              onChange={(e) =>
                updateOption(index, e.target.value)
              }
              className="flex-1 border rounded-lg p-3"
            />

            <button
              onClick={() => deleteOption(index)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 rounded-lg"
            >
              ✕
            </button>

          </div>
        ))}

      </div>

      <button
        onClick={addOption}
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
      >
        + Add Option
      </button>

    </div>
  );
};

export default OptionEditor;