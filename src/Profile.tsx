import React, { useEffect } from "react";
import { profileData, InsituteData , StudentsDevices } from "./Api";
import ProfilePage from "./ProfilePage";

function Profile() {
  const [data, setdata] = React.useState();
  const [insituteData, setInsituteData] = React.useState();
  const [studentsDevices, setStudentsDevices] = React.useState();
  useEffect(async () => {
    const ProfileData = await profileData();
    setdata(ProfileData.data);
  }, []);

  useEffect(async () => {
    const insitutedata = await InsituteData();
    setInsituteData(insitutedata);
  }, []);

   useEffect(async () => {
     const devices = await StudentsDevices();
     setStudentsDevices(devices);
   }, []);
   console.log(studentsDevices);
  return (
    <>
      {(!data && <h1 className="text-2xl">Loading.....</h1>) ||
        (data && (
          <ProfilePage data={data} insituteData={insituteData}></ProfilePage>
        ))}
    </>
  );
}

export default Profile;
