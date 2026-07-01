import type { FormField } from "../types/form";

export const validateForm = (fields: FormField[]): string[] => {
  const errors: string[] = [];

  fields.forEach((field, index) => {
    if (!field.label.trim()) {
      errors.push(`Field ${index + 1}: Label is required.`);
    }

    if (
      ["radio", "checkbox", "select"].includes(field.type) &&
      (!field.options || field.options.length === 0)
    ) {
      errors.push(`"${field.label}" must have at least one option.`);
    }

    if (
      field.options &&
      field.options.some((option) => option.trim() === "")
    ) {
      errors.push(`"${field.label}" contains an empty option.`);
    }
  });

  return errors;
};