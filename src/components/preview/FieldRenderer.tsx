import type { FormField } from "../../types/form";

interface Props {
  field: FormField;
}

const inputStyle =
  "w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 outline-none";

const FieldRenderer = ({ field }: Props) => {
  switch (field.type) {
    case "text":
    case "email":
    case "number":
    case "password":
    case "date":
      return (
        <input
          type={field.type}
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
          required={field.required}
          className={inputStyle}
        />
      );

    case "textarea":
      return (
        <textarea
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
          required={field.required}
          className={inputStyle}
        />
      );

    case "radio":
      return (
        <div className="space-y-2">
          {field.options?.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2"
            >
              <input type="radio" name={field.id} />
              {option}
            </label>
          ))}
        </div>
      );

    case "checkbox":
      return (
        <div className="space-y-2">
          {field.options?.map((option) => (
            <label
              key={option}
              className="flex items-center gap-2"
            >
              <input type="checkbox" />
              {option}
            </label>
          ))}
        </div>
      );

    case "select":
      return (
        <select className={inputStyle}>
          {field.options?.map((option) => (
            <option key={option}>
              {option}
            </option>
          ))}
        </select>
      );

    case "file":
      return (
        <input
          type="file"
          className={inputStyle}
        />
      );

    default:
      return null;
  }
};

export default FieldRenderer;