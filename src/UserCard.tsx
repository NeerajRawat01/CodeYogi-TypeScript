import React, { FC } from 'react';
import { User } from './Models.ts/user';

type userProps = {userData:User};
const  UserCard:FC <userProps> = ({userData}) =>
{

  return (
   <div className='p-3 flex flex-col border-green-300 w-80 h-80  shadow-lg border rounded-md'>
       <div ><img className='rounded-md  w-48 h-32' src={userData.picture.large} alt="User Image" /></div>

       <div className=' font-bold'>
           <h3>{userData.name.title} <span>{userData.name.first}</span> <span>{userData.name.last}</span></h3>
       </div>
       <div className='font-semibold'>
       <h3>Age: {userData.dob.age}</h3>
       <h3>Email: {userData.email}</h3>
       </div>

   </div>
  );
}

export default UserCard;