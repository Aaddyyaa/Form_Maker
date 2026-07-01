import { useForm } from "../../context/FormContext";
import FieldEditor from "./FieldEditor";

const BuilderCanvas = () => {
  const { fields } = useForm();

  return (
    <div className="flex-1 overflow-y-auto bg-slate-50 p-8">

      <div className="max-w-4xl mx-auto">

        <h2 className="text-2xl font-bold mb-6">
          Form Builder
        </h2>

        {fields.length === 0 ? (
          <div className="rounded-xl border-2 border-dashed border-gray-300 bg-white p-16 text-center">

            <h3 className="text-2xl font-semibold text-gray-600">
              No fields added
            </h3>

            <p className="mt-3 text-gray-500">
              Choose a field from the left sidebar to begin building your form.
            </p>

          </div>
        ) : (
          <div className="space-y-6">
            {fields.map((field) => (
              <FieldEditor
                key={field.id}
                field={field}
              />
            ))}
          </div>
        )}

      </div>

    </div>
  );
};

export default BuilderCanvas;