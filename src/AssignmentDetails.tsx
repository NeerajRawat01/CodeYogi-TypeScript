
import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { DateTime } from "luxon";
import PopUp from "./Popup";
import { getAssignmentDetails } from "./Api";
import { string } from "yup";

const AssignmentDetails:FC = ()=> {
  const data = useParams();
  const id = +data.assignmentNumber;

  const [assignmentDetail, setAssignmentDetail] = React.useState();
  const [submit, showSubmit] = React.useState(false);
  const due_date_str = assignmentDetail && assignmentDetail.due_date;
  const due_date = DateTime.fromISO(due_date_str).toFormat("ccc LLL dd yyyy");

  const showPopUp = () => {
    showSubmit(true);
  };
  const back = () => {
    showSubmit(false);
  };

  useEffect(async() => {
    const assignmentPromise =  await getAssignmentDetails(id);
    setAssignmentDetail(assignmentPromise);
  }, []);
  const submisionLink =
    assignmentDetail &&
    assignmentDetail.submissions[0] &&
    assignmentDetail.submissions[0].submission_link;
  //if(!assignmentDetail) return <></>

  return (
    <>
      <div className="m-5 p-5 text-gray-500 bg-white rounded-md shadow-md ">
        <h3 className="p-3 font-bold text-xl border-b">Assignment Details</h3>
        <div className="flex justify-between p-3  border-b">
          <h3>Title</h3> <p>{assignmentDetail && assignmentDetail.title}</p>
        </div>
        <div className="flex justify-between p-3 border-b">
          <h3>Due Date</h3> <p>{due_date}</p>
        </div>
        <div className="flex justify-between p-3 border-b">
          <h3>Description:</h3>{" "}
          <p>
            {
              <MDEditor.Markdown
                source={assignmentDetail && assignmentDetail.description}
                className=" mx-4 px-4 !text-black !bg-white"
              />
            }
          </p>
        </div>

        <div className="mt-3">
          {submisionLink && (
            <div className="flex m-3 items-center">
              <button
                onClick={showPopUp}
                class="relative flex justify-center border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600
     hover:bg-indigo-700 items-center focus:outline-none focus:ring-2 focus:ring-offset-2 m-1 group focus:ring-indigo-500 py-2 px-4"
              >
                <span
                  className="absolute 
     inset-y-0 left-0 flex items-center pl-3"
                ></span>
                <div className="">Re-submit</div>
              </button>
              <a
                className="text-base text-indigo-600 ml-7"
                href={submisionLink}
                target="_blank"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  className="inline"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
                </svg>{" "}
                See Your Submission
              </a>
            </div>
          )}
          {!submisionLink && (
            <div className="flex justify-center ">
              <button
                onClick={showPopUp}
                className=" text-green-700 font-bold "
              >
                {" "}
                Submit
              </button>
            </div>
          )}
        </div>
      </div>
      {submit && <PopUp id={assignmentDetail.id} back={back}></PopUp>}
    </>
  );
}

export default AssignmentDetails;
