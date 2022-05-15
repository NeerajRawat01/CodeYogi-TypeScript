import React, { FC, useContext } from "react";
//import { AlertContext } from "./AlertContext";
import { SubmitAssignments } from "./Api";
import { useForms } from "./Forms";

type PopUpProps = {id:number , back:any}
const PopUp:FC <PopUpProps> = ({ id, back })=> {
 // const { showAlert, alerts } = useContext(AlertContext);
  const submitAssignment = (submissionLink:string) => {
    SubmitAssignments(submissionLink, id);
    //showAlert("submission Successfull");
    back();
  };

  const { formData, handleChange, submit, urlError } = useForms(
    { submissionLink: "" },
    submitAssignment
  );

  return (
    <div className="flex bg-gray-100 mx-20 fixed top-40 left-30  p-20  rounded-md border border-red-200   ">
      <div className="flex flex-col">
        <input
          value={formData.submissionLink}
          onChange={handleChange}
          name="submissionLink"
          className="border p-3"
          placeholder="Submission Link"
        ></input>
        <span className=" h-5 text-red-500 p-2 ">{urlError}</span>
      </div>
      <div className="ml-6">
        <button
          onClick={back}
          className="p-3 px-3 py-2 m-2 rounded-md text-white bg-indigo-700"
        >
          Back
        </button>
        <button
          onClick={submit}
          className="p-3 px-3 py-2 m-2 rounded-md text-white bg-indigo-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default PopUp;
