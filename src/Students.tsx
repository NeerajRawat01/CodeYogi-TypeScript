
import React, { FC, useEffect } from "react";
import UserCard from "./UserCard";
import { getUsers } from "./Api";
import { User } from "./Models.ts/user";

const Students:FC = () =>{
  let [users, setUsers] = React.useState<User[]>([]);

  useEffect(() => {
    const userPromise = getUsers();
    userPromise.then((response) => setUsers(response));
    setUsers(users);
  }, []);

  return (
    <>
      <div className="flex   flex-wrap ">
        <h1 className="m-5 font-bold text-xl">Students List</h1>
        <div className="flex space-x-2 justify-center  items-center bg-white space-y-4 p-5 flex-wrap  ">
          <span className="w-80 h-80"></span>
          {users.map((u) => (
            <UserCard userData={u}></UserCard>
          ))}
        </div>
      </div>
    </>
  );
}

export default Students;
