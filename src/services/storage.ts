import type { FormData } from "../types/form";

const STORAGE_KEY = "dynamic-form-builder";

export const saveForm = (form: FormData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(form));
};

export const loadForm = (): FormData | null => {
  const data = localStorage.getItem(STORAGE_KEY);

  if (!data) return null;

  return JSON.parse(data);
};

export const clearForm = () => {
  localStorage.removeItem(STORAGE_KEY);
};

export const exportForm = (form: FormData) => {
  const blob = new Blob(
    [JSON.stringify(form, null, 2)],
    {
      type: "application/json",
    }
  );

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");

  link.href = url;
  link.download = "form.json";

  link.click();

  URL.revokeObjectURL(url);
};

export const importForm = (
  file: File
): Promise<FormData> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        const json = JSON.parse(
          e.target?.result as string
        );

        resolve(json);
      } catch {
        reject("Invalid JSON file");
      }
    };

    reader.onerror = reject;

    reader.readAsText(file);
  });
};