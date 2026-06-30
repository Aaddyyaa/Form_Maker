export type FieldType =
  | "text"
  | "email"
  | "number"
  | "date"
  | "dropdown";

export interface FormField {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
}