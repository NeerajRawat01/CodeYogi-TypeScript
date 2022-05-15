import React, { FC, useEffect } from "react";
import AssignmentCard from "./AssignmentCard";
import { getAssignments } from "./Api";
import { Assignment } from "./Models.ts/assignments";

const AssignmentList:FC = ()=> {
  const [assignment, setAssignments] = React.useState<Assignment[]>([]);

  useEffect(() => {
    const assignMentPromise =  getAssignments().then((assignMentPromise)=>{
        setAssignments(assignMentPromise);
    });
    
  }, []);

  return (
    <>
      <h1 className=" font-bold text-xl text-gray-900 ">Assignment List</h1>
      <div className=" p-4 mt-5 border-md bg-white ">
        <div className=" px-20 space-y-4 ">
          {assignment.map((a) => (
            <AssignmentCard key={a.id} assignments={a}></AssignmentCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default AssignmentList;
