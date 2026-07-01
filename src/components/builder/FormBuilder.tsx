import { FormProvider } from "../../context/FormContext";

import BuilderSidebar from "./BuilderSidebar";
import BuilderCanvas from "./BuilderCanvas";
import Toolbar from "./Toolbar";
import FormPreview from "../preview/FormPreview";

const FormBuilder = () => {
  return (
    <FormProvider>
      <div className="min-h-screen bg-slate-100 flex flex-col">

        <Toolbar />

        <div className="flex flex-1 overflow-hidden">

          <BuilderSidebar />

          <BuilderCanvas />

          <FormPreview />

        </div>

      </div>
    </FormProvider>
  );
};

export default FormBuilder;