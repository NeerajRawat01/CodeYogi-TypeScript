import React, { FC } from "react";
import cn from "classnames";
const Alert:FC = ({ alert, removeAlert })=> {
  const { message, type } = alert;

  const alertClasses = cn("max-w-lg mx-auto p-5 rounded-md border text-white", {
    "bg-red-500 border-red-700": type === "error",
    "bg-orange-500 border-orange-700": type === "warning",
    "bg-green-500 border-green-700": type === "success",
  });

  return (
    <>
      <div className={alertClasses}>
        <span className="mr-10">{message}</span>
        <button onClick={() => removeAlert(alert)}>X</button>
      </div>
    </>
  );
}
export default Alert;
