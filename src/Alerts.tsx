import React, { FC, useContext } from "react";
import { AlertContext } from "./AlertContext";
import Alert from "./Alert";
const Alerts:FC = () => {
  const { alerts, removeAlert } = useContext(AlertContext);

  return (
    <>
      <div className="fixed space-y-3 z-50 right-0 left-0 w-100">
        {alerts.map((a) => (
          <Alert key={a.id} alert={a} removeAlert={removeAlert} />
        ))}
      </div>
    </>
  );
}
export default Alerts;
