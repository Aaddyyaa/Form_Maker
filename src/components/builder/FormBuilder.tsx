
import { FormProvider } from "../../context/FormContext";

import BuilderSidebar from "./BuilderSidebar";
import BuilderCanvas from "./BuilderCanvas";
import Toolbar from "./Toolbar";

import FormPreview from "../preview/FormPreview";

import "./FormBuilder.css";

const FormBuilder = () => {
  return (
    <FormProvider>
      <div className="form-builder">

        <Toolbar />

        <div className="builder-content">

          <BuilderSidebar />

          <BuilderCanvas />

          <FormPreview />

        </div>

      </div>
    </FormProvider>
  );
};

export default FormBuilder;
