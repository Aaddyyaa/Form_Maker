import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { FormField, FieldType } from "../types/form";

interface FormContextType {
  title: string;
  description: string;
  fields: FormField[];

  setTitle: (title: string) => void;
  setDescription: (description: string) => void;
  setFields: React.Dispatch<React.SetStateAction<FormField[]>>;

  addField: (type: FieldType) => void;
  updateField: (id: string, updated: Partial<FormField>) => void;
  deleteField: (id: string) => void;
  resetForm: () => void;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [title, setTitle] = useState("Untitled Form");
  const [description, setDescription] = useState("");
  const [fields, setFields] = useState<FormField[]>([]);

  const addField = (type: FieldType) => {
    const newField: FormField = {
      id: Date.now().toString(),
      type,
      label: "Untitled Field",
      placeholder: "",
      required: false,
      description: "",
      defaultValue: "",
      options:
        type === "radio" ||
        type === "checkbox" ||
        type === "select"
          ? ["Option 1"]
          : [],
    };

    setFields((prev) => [...prev, newField]);
  };

  const updateField = (
    id: string,
    updated: Partial<FormField>
  ) => {
    setFields((prev) =>
      prev.map((field) =>
        field.id === id
          ? { ...field, ...updated }
          : field
      )
    );
  };

  const deleteField = (id: string) => {
    setFields((prev) =>
      prev.filter((field) => field.id !== id)
    );
  };

  const resetForm = () => {
    setTitle("Untitled Form");
    setDescription("");
    setFields([]);
  };

  return (
    <FormContext.Provider
      value={{
        title,
        description,
        fields,

        setTitle,
        setDescription,
        setFields,

        addField,
        updateField,
        deleteField,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error(
      "useForm must be used inside FormProvider"
    );
  }

  return context;
};