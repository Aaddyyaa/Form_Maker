import { useState } from "react";
import type { FormField } from "./types/form";

import FormBuilder from "./components/FormBuilder";
import FormPreview from "./components/FormPreview";

function App() {
  const [fields, setFields] = useState<FormField[]>([]);

  return (
    <div className="container">
      <FormBuilder fields={fields} setFields={setFields} />

      <FormPreview fields={fields} />
    </div>
  );
}

export default App;