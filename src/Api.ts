import axios from "axios";
import { useContext } from "react";
import { Assignment } from "./Models.ts/assignments";
import { Lecture } from "./Models.ts/lectures";
import { User } from "./Models.ts/user";
//import { AlertContext } from "./AlertContext";

const codeYogiBaseUrl = "https://api.codeyogi.io/";
type userdata = {results:User[]};
export const getUsers = async () => {
  const token = await axios.get<userdata>("https://randomuser.me/api/?results=12");
  const userPromise = token.data.results;
  return userPromise;
};

export const getLectures = async () => {
  const token = await axios.get<Lecture[]>(codeYogiBaseUrl + "batches/1/sessions", {
    withCredentials: true,
  });
  const lecturesPromise = token.data;
  return lecturesPromise;
};

export const getAssignments = async () => {
  try {
    const token = await axios.get<Assignment[]>(codeYogiBaseUrl + "batches/1/assignments", {
      withCredentials: true,
    });
    const assignmentPromise = token.data;
    return assignmentPromise;
  } catch (e) {
    return [];
  }
};

export const SubmitAssignments = async (submissionLink:string, assignmentId:number) => {
  const e = "successfull";
  try {
    await axios.put(
      codeYogiBaseUrl + `assignment/${assignmentId}/submit`,
      { submissionLink },
      { withCredentials: true }
    );
    return(e);
  } catch (e) {
    // return (e.message , "error");
  }
};

export const getAssignmentDetails = async (assignMentId:number) => {
  const token = await axios.get(
    codeYogiBaseUrl + `assignments/${assignMentId}`,
    {
      withCredentials: true,
    }
  );
  const assignmentPromise = token.data;
  return assignmentPromise;
};

export const profileData = async () => {
  const token = await axios.get(codeYogiBaseUrl + "me", {
    withCredentials: true,
  });
  const profilePromise = token.data;
  return profilePromise;
};

export const InsituteData = async () => {
  const token = await axios.get(codeYogiBaseUrl + "institutes", {
    withCredentials: true,
  });
  const institutePromise = token.data;
  return institutePromise;
};

export const StudentsDevices = async () => {
  const token = await axios.get(codeYogiBaseUrl + "students/devices", {
    withCredentials: true,
  });
  const devices = token.data;
  console.log("d=" + devices);
  return devices;
};