import {  FC } from "react";

type  buttonProps = {children:string;};
const Button:FC <buttonProps>= ({children})=>
{
    return(
        <div>
            <button  className="px-8 py-2 text-white bg-indigo-500 rounded-md font-semibold m-5">{children}</button>
        </div>
    );
}

export default Button;