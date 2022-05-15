import React, { FC } from 'react';
import {
  Link,
} from "react-router-dom";

type NavProps = { to:string, children:any };
const NavLink:FC<NavProps> = ({to,children})=> {
   
  return (   
    
 <Link to={to} className=" text-white">{children}</Link>
  );
}

export default NavLink;