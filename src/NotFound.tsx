import React, { FC } from 'react';
import  NavLink  from './NavLink';
const NotFound:FC=()=> {
  return (
    <div className=' h-screen flex items-center justify-center  '>
    <div className=' font-bold  mr-5  text-indigo-700 text-5xl'>404 </div>
    <div className='ml-3 px-5 border-l mt-12'>
      <h3 className=' font-bold text-5xl'>Page Not Found</h3>
      <h3>Please check the URL in the address bar and try again.</h3>
      <NavLink to ="/lectures">
      <button className='bg-indigo-700 px-5 py-2 text-white text-center rounded-md mt-4'>Go Back Home</button>
      </NavLink>
    </div>
   
    </div>
  );
}

export default NotFound;