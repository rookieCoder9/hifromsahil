import React from "react";
import "./intro.css";
import Letter from "./Letter";
import Header from "./Header";
import {useState} from 'react'
import {FaLinkedinIn,FaGithub} from 'react-icons/fa'
import {IoMail} from 'react-icons/io5'
import {AiFillProfile} from 'react-icons/ai'


const Intro = () => {
  
    
   
    const [dark,setDark]=useState(true);
  const arr = [
    "Hello,",
    "I'm",
    "Sahil!",
    "An",

    "undergrad",
    "student",
    "who",
    "loves",
    "to",
    "Code",
    ":)",
  ];

  const words = arr.map((ele) => {
    return Array.from(ele).map((char, ind) => {
        const t = (Math.random() * 4) +1;
     
        const className="span-"+(t | 0) ;
     
        return <Letter className={className} key={ind} letter={char}></Letter>;
     
    });
  });

  return (
    <div className={dark ? "  flex-col light-mode" : "  flex-col dark-mode"} id="top" >
          
      <div className= { dark ? " container flex-col dark-mode" : " container flex-col light-mode"}>
      <Header mode={[dark,setDark]} ></Header>
        <div className="content-box">
          <div className="flex-row name">
            <div> {words[0]}</div>
            <div> {words[1]}</div>
            <div> {words[2]}</div>
          </div>
          <div className="flex-row">
            <div> {words[3]}</div>
            <div> {words[4]}</div>
            <div> {words[5]}</div>
          </div>
          <div className="flex-row">
            <div> {words[6]}</div>
            <div> {words[7]}</div>
            <div> {words[8]}</div>
            <div> {words[9]}</div>
            <div> {words[10]}</div>
          </div>
        
        </div>
        <div  className="flex-row icons-div"><a href="https://www.linkedin.com/in/sahil-kumar-b58752221/" target="blank"><FaLinkedinIn className="icon-3"  fill={dark ? "white":"black"}></FaLinkedinIn></a>
      <a href="https://github.com/rookieCoder9" target="blank">  <FaGithub className="icon-1" href=""  fill={dark ? "white":"black"}></FaGithub></a>
      <a href="mailto:nsut.sahilkumar@gmail.com" >  <IoMail className="icon-2" href=""  fill={dark ? "white":"black"}></IoMail></a>
      <a href="https://drive.google.com/file/d/1XoXX07gUogJkN-YaBT23GdouAn971gZb/view?usp=share_link" target="blank">  <AiFillProfile className="icon-1" href=""  fill={dark ? "white":"black"}></AiFillProfile></a>
        </div>
      </div>

      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ marginTop: "-1px" }}
          viewBox="0 0 1440 320"
        >
          <path
            className={dark ? "dark-mode": "light-mode"}
            fillOpacity="1"
            d="M0,32L40,58.7C80,85,160,139,240,165.3C320,192,400,192,480,160C560,128,640,64,720,74.7C800,85,880,171,960,192C1040,213,1120,171,1200,138.7C1280,107,1360,85,1400,74.7L1440,64L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Intro;
