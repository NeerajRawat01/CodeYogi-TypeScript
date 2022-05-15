import { useState } from "react";
import { string } from "yup";


export const useForms = (initialValue:{submissionLink:string}, submitAssignment:any) => {
  const [formData, setFormData] = useState(initialValue);
  const [urlError, setUrlError] = useState("");

  const handleChange = (event:any) => {
    setFormData({ ...formData, [event.target.name ]: event.target.value });
  };

  const submit = () => {
    const urlValidator = string().url("Enter a valid Url");
    try {
      urlValidator.validateSync(formData.submissionLink);
      submitAssignment(formData.submissionLink);
    } catch (e:any) {
      setUrlError(e.message);
    }
  };

  return { formData, handleChange, urlError, submit };
};
