import React, { FC } from "react";
import NavLink from "./NavLink";
import PopUp from "./Popup";
import { DateTime } from "luxon";
import { Assignment } from "./Models.ts/assignments";

type assignmentProps = {assignments:Assignment}
const AssignmentCard:FC <assignmentProps> = ({ assignments }) => {
  const SubmissionLink =
    assignments.submissions[0] !== undefined &&
    assignments.submissions[0].submission_link;
  const due_date_str = assignments.due_date;
  const due_date = DateTime.fromISO(due_date_str).toFormat("ccc LLL dd yyyy");

  const updated_date_str = assignments.updated_at;
  const upDated_at = DateTime.fromISO(updated_date_str).toFormat("ccc LLL dd yyyy");

  const currentTime:any = DateTime.now();
  const currentMonth = DateTime.fromISO(currentTime).toFormat("L");
  const currentDay = DateTime.fromISO(currentTime).toFormat("d");
  const dueDateMonth = DateTime.fromISO(updated_date_str).toFormat("L");
  const dueDateDay = DateTime.fromISO(updated_date_str).toFormat("d");

  const [submit, showSubmit] = React.useState(false);

  const showPopUp = () => {
    showSubmit(true);
  };
  const back = () => {
    showSubmit(false);
  };


   //<NavLink to={`/assignment/${assignments.id}/details`}></NavLink> </NavLink>
  return (
    <>
      <div className="border bg-white  p-4 rounded-md shadow-lg">
       <NavLink to={`/assignment/${assignments.id}/details`}>
          <div className="flex flex-col ">
            <div className="flex m-2 justify-between ">
              <div>
                <h3 className="text-gray-900">
                  #{assignments.id} {assignments.title}
                  <span className=" ml-4 text-gray-500"> ({upDated_at})</span>
                </h3>

                <div className="">
                  {assignments.submissions[0] !== undefined && (
                    <p className="text-red-500">Due Date: {due_date}</p>
                  )}

                  {assignments.submissions[0] === undefined && (
                    <p className="text-gray-500">Due Date: {due_date}</p>
                  )}

                  {(currentMonth > dueDateMonth ||
                    (currentMonth === dueDateMonth &&
                      currentDay > dueDateDay)) && (
                    <p className="text-red-500">
                      (submission will count late now)
                    </p>
                  )}
                </div>
              </div>
                
              {assignments.submissions[0] !== undefined && (
                <p className="text-green-500 font-bold">Submitted</p>
              )}
              {assignments.submissions[0] === undefined && (
                <p className="text-red-500 font-bold"> Not Submitted</p>
              )}
            </div>
          </div>
          </NavLink>
        {assignments.submissions[0] !== undefined && (
          <div className="flex p-4  justify-between">
            <button
              onClick={showPopUp}
              className="inline-flex text-green-700 font-bold "
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 1024 1024"
                className="mr-4  w-4 h-4 sm:w-6 sm:h-6"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0 0 51.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"></path>
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"></path>
              </svg>{" "}
              Re-Submit
            </button>

            <button className="inline-flex underline text-indigo-700 font-bold  ">
              
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 512 512"
                className="inline mt-2"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M405.34 405.332H106.66V106.668H240V64H106.66C83.191 64 64 83.197 64 106.668v298.664C64 428.803 83.191 448 106.66 448h298.68c23.469 0 42.66-19.197 42.66-42.668V272h-42.66v133.332zM288 64v42.668h87.474L159.999 322.133l29.866 29.866 215.476-215.47V224H448V64H288z"></path>
              </svg>
              { SubmissionLink &&
              <a href={SubmissionLink} target="_blank">
                See your submission
              </a>}
            </button>
          </div>
        )}
        {assignments.submissions[0] == undefined && (
          <div className="flex justify-center ">
            <button onClick={showPopUp} className=" text-green-700 font-bold ">
              Submit
            </button>
          </div>
        )}
        </div>
      {submit && <PopUp id={assignments.id} back={back}></PopUp>}
      </>
  );
        }

export default AssignmentCard;