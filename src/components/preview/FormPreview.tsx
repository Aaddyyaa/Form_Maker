import { useForm } from "../../context/FormContext";
import FieldRenderer from "./FieldRenderer";

const FormPreview = () => {
  const { fields } = useForm();

  return (
    <div className="w-105 bg-white border-l p-8 overflow-y-auto">

      <h2 className="text-2xl font-bold mb-6">
        Live Preview
      </h2>

      {fields.length === 0 ? (
        <div className="text-center text-gray-500 mt-20">
          No fields added.
        </div>
      ) : (
        <form className="space-y-6">

          {fields.map((field) => (
            <div key={field.id}>

              <label className="block font-semibold mb-2">

                {field.label}

                {field.required && (
                  <span className="text-red-500 ml-1">*</span>
                )}

              </label>

              {field.description && (
                <p className="text-sm text-gray-500 mb-2">
                  {field.description}
                </p>
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