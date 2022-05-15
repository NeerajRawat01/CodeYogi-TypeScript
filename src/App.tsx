import React, { FC, useState } from "react";
import LectureList from "./LectureList";
import AssignmentList from "./AssignmentList";
import QuizPage from "./QuizPage";
import MainLayout from "./MainLayout";
import NotFound from "./NotFound";
import AssignmentDetails from "./AssignmentDetails";
import Profile from "./Profile";
import Logout from "./Logout";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Students from "./Students";
import { AlertContext } from "./AlertContext";
import Alerts from "./Alerts";
import {uniqueId} from "lodash"

const App:FC = ()=> {
  const [alerts, setAlerts] = useState<any>([]);

  const showAlert = (message:string, type = "success", dismiss = 4) => {
    const id= uniqueId();
    const alert = { message, type,id };
    setAlerts([...alerts, alert]);

    dismiss &&
      setTimeout(() => {
        removeAlert(alert);
      }, dismiss * 1000);
  };

  const removeAlert = (alert:any) => {
    setAlerts((alerts:any) => {
      const newAlerts = alerts.filter((a:any) => a !== alert);
      setAlerts(newAlerts);
    });
  };

  const alertData = { alerts, showAlert, removeAlert };

  return (
    <>
      <AlertContext.Provider value={alertData}>
        <Alerts></Alerts>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="lectures" />} />

            <Route path="/" element={<MainLayout />}>
              <Route path="assignment" element={<AssignmentList />} />
              <Route path="lectures" element={<LectureList />} />
              <Route path="profile" element={<Profile />} />
              <Route path="logout" element={<Logout />} />
              <Route path="lectures" element={<LectureList />} />
              <Route path="students" element={<Students />} />
              <Route
                path="assignment/:assignmentNumber/details"
                element={<AssignmentDetails />}
              />
            </Route>

            <Route path="quiz" element={<QuizPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AlertContext.Provider>
    </>
  );
}

export default App;
