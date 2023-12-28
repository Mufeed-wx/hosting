import sty from "styled-components";
import bg from "../images/natuar.jpg";
export const Wrapper = sty.div`
display:flex;
align-items:center;
justify-content:center;
  height:600px;
  width:100%;
  background-image: url('https://cdn.pixabay.com/photo/2017/12/01/03/17/nature-2990060_1280.jpg');
  background-size: cover; 
  background-position: center;  
  background-repeat: no-repeat;
  margin-bottom:200px;
  `;
export const FormDiv = sty.div`
  width:300px;
  height:auto;
  background:white;
  border-radius:8px;
//   border:3px solid brown;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding:20px;
  background-color:rgb(233, 218, 248);
//   box-shadow: brown 0px 3px 8px;
  `;

export const Label = sty.label`
      width:80%;
      color:black;
      font-size:15px;
      padding:10px 0px;
  `;

export const INP = sty.input`
  background:white;
  height:30px;
  width:80%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border:none;
  border-radius:4px;
  `;
export const Btn = sty.button`
  padding:10px 20px;
  background-color:white;
  margin-top:30px;
  width:150px;
  text-align:center;
  border-radius:4px;
  border:1px solid brown;
  font-weight:bold;
  
  
  &:hover {
    background-color: brown;
    color:white;
    border:1px solid white;
  }

  `;

export const Head = sty.h1`
  font-size:30px;
//   border-bottom:5px solid brown; 
  `;

export const message = sty.input`
  background:"red`;

export const MINP = sty.textarea`
  background:white;
  height:80px;
  width:80%;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border:none;
  border-radius:4px;
  `;
export const CFormDiv = sty.div`
  width:500px;
  height:450px;
  background:white;
  border-radius:8px;
//   border:3px solid brown;
  display: flex;
  flex-direction: column;
  align-items:center;
  padding:20px;
  background-color:rgb(233, 218, 248);
//   box-shadow: brown 0px 3px 8px;
  `;
