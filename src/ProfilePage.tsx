import React from "react";
import { date, object, string } from "yup";
import ProfileInput from "./ProfileInput";
import { Formik, Form } from "formik";
import { DateTime } from "luxon";

function ProfilePage({ data, insituteData }) {
  const dateOfBirth_str = data.date_of_birth;
  const dateOfBirth = DateTime.fromISO(dateOfBirth_str).toFormat("dd-MM-yyyy");

  const onSubmit = () => {
    console.log("Api calling");
  };
  const validationSchema = object().shape({
    email: string().required().email(),
    firstName: string().required(),
    lastName: string().required(),
    yearOfPassOut: string().required(),
    dateOfBirth: date().required(),
  });
  const initialValues = {
    email: data.email,
    firstName: data.first_name,
    lastName: data.last_name,
    yearOfPassOut: data.year_of_pass_out,
    phoneNumber: data.phone_no,
    dateOfBirth: dateOfBirth,
    rollNumber: data.institute_roll_no,
    branch: data.branch,
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <div className="p-2 mt-5 border-md bg-white">
        <Form>
          <h3 className="p-3 font-bold text-xl border-b">Personal Details</h3>
          <div className="flex justify-between p-8 border-b">
            <h3 className="w-80">First Name</h3>
            <ProfileInput
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              className="border border-gray-300 rounded-md bg-gray-50 p-2  grow"
            ></ProfileInput>
          </div>
          <div className="flex justify-between p-8 border-b">
            <h3 className="w-80">
              Last Name
              <span className="text-red-500 font-semibold ">
                (Skip only if you don't have it in official documents)
              </span>
            </h3>
            <ProfileInput
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              className="border border-gray-300 rounded-md bg-gray-50 p-2 grow"
            ></ProfileInput>
          </div>
          <div className="flex justify-between p-8 border-b">
            <h3 className="w-80">Email Address</h3>
            <ProfileInput
              id="email"
              name="email"
              type="email"
              placeholder="enter email"
              className="border border-gray-300 rounded-md bg-gray-50 p-2 grow"
            ></ProfileInput>
          </div>
          <div className="flex justify-between p-8  border-b">
            <h3 className="w-80">Insitute Name</h3>
            <input className="border border-gray-300 rounded-md bg-gray-50 p-2 grow"></input>
          </div>
          <div className="flex justify-between p-8 border-b">
            <h3 className="w-80">Year of passout</h3>
            <ProfileInput
              id="yearOfPassOut"
              name="yearOfPassOut"
              placeholder="Year Of PassOut"
              className="border border-gray-300 rounded-md bg-gray-50 p-2 grow"
            ></ProfileInput>
          </div>
          <div className="flex justify-between p-8 border-b">
            <h3 className="w-80">Phone Number </h3>
            <ProfileInput
              id="phoneNumber"
              name="phoneNumber"
              type="number"
              placeholder="Mobile Number"
              className="border border-gray-300 rounded-md bg-gray-50 p-2 grow"
            ></ProfileInput>
          </div>
          <div className="flex react-datepicker_input-container justify-between p-8 border-b">
            <h3 className="w-80">Date of birth</h3>
            <ProfileInput
              id="dateOfBirth"
              name="dateOfBirth"
              placeholder="Date of Birth"
              className="border border-gray-300 rounded-md bg-gray-50 p-2 grow"
            ></ProfileInput>
          </div>
          <div className="flex justify-between p-8 border-b">
            <h3 className="w-80">Device you are using to do Assignment</h3>{" "}
            <input className="border border-gray-300 rounded-md bg-gray-50 p-2 grow"></input>
          </div>
          <div className="flex justify-between p-8 border-b">
            <h3 className="w-80">Insitute Roll Number </h3>
            <ProfileInput
              id="rollNumber"
              name="rollNumber"
              type="number"
              placeholder="Institute roll Number"
              className="border border-gray-300 rounded-md bg-gray-50 p-2 grow"
            ></ProfileInput>
          </div>
          <div className="flex justify-between p-8 border-b">
            <h3 className="w-80">Branch</h3>
            <ProfileInput
              id="branch"
              name="branch"
              placeholder="Branch"
              className="border border-gray-300 rounded-md bg-gray-50 p-2 grow"
            ></ProfileInput>
          </div>
          <button
            onClick={onSubmit}
            type="submit"
            className="m-3 px-7 py-2 bg-indigo-700 text-white text-center rounded-md "
          >
            Update
          </button>
        </Form>
      </div>
    </Formik>
  );
}

export default ProfilePage;
