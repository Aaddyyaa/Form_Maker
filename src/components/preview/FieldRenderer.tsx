import type { FormField } from "../../types/form";

interface Props {
  field: FormField;
}

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
        />
      );

    case "textarea":
      return (
        <textarea
          placeholder={field.placeholder}
          defaultValue={field.defaultValue}
          required={field.required}
        />
      );

    case "radio":
      return (
        <>
          {field.options?.map((option, index) => (
            <label key={index}>
              <input
                type="radio"
                name={field.id}
                defaultChecked={field.defaultValue === option}
              />
              {option}
            </label>
          ))}
        </>
      );

    case "checkbox":
      return (
        <>
          {field.options?.map((option, index) => (
            <label key={index}>
              <input type="checkbox" />
              {option}
            </label>
          ))}
        </>
      );

    case "select":
      return (
        <select
          defaultValue={field.defaultValue}
          required={field.required}
        >
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      );

    case "file":
      return <input type="file" />;

    default:
      return null;
  }
};

export default FieldRenderer;