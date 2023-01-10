import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import './header.css'
const Header = ({mode}) => {
 
    const first=useRef(),second=useRef();
    const changeTheme= ()=> {
      
           mode[1]((prev)=> !prev);
         


    }
    useEffect(()=> {
        const f=first.current,s=second.current;
      

       if (mode[0]) {
        f.style.backgroundColor="black";
        f.style.border="1px solid white";
        s.style.backgroundColor="white";
        s.style.border="1px solid black";

       }
       else {
        f.style.backgroundColor="white";
        f.style.border="2px solid black";
        s.style.backgroundColor="black";
        s.style.border="2px solid white";

       }
       

    } , [mode])
  return (
    <div className='header'>
         <span ></span>
  
        <button  className="themediv" onClick={changeTheme} ><span  ref={first} id="move" className="btn dark"></span>
  <span ref={second}  className="btn light"></span> </button>
 
    </div>
  )
}

export default Header