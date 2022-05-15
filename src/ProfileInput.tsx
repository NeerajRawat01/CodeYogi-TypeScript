import React from "react";
import { useField } from "formik";
function ProfileInput({ id, type, name, ...rest }) {
  const [field, meta] = useField(name);
  return (
    <div className="flex justify-between  flex-col grow  ">
      <input
        className="border border-gray-300 rounded-md bg-gray-50 p-2 "
        type={type || "text"}
        onChange={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        id={id}
        name={name}
        {...rest}
      />
      <div className="h-2">
        {meta.touched && meta.error && (
          <span className="text-red-500  ">{meta.error}</span>
        )}
      </div>
    </div>
  );
}

export default ProfileInput;
