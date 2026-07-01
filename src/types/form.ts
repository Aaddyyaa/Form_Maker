export type FieldType =
  | "text"
  | "textarea"
  | "email"
  | "number"
  | "password"
  | "date"
  | "radio"
  | "checkbox"
  | "select"
  | "file";

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  placeholder?: string;
  required: boolean;
  options?: string[];
  description?: string;
  defaultValue?: string;
}

export interface FormData {
  title: string;
  description: string;
  fields: FormField[];
}