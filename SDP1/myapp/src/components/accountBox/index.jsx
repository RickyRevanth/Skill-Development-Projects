import React from "react";
import styled from "styled-components";
import MyForm from "./Form";
const BoxContainer = styled.div`
  width:280px;
  min-height: 550px;
  display:flex;
  flex-direction:column;
  border-radius:19px;
  background-color:#fff;
  box-shadow:0 0 2px rgbs(15, 15, 15, 0.28);
  position:relative;
  overflow:hidden;
`;

const TopContainer = styled.div`
width:100%;
height:250px;
display:flex;
flex-direction:column;
justify-content:flex-end;
padding: 0 1.8em;
padding-bottom: 5em;
`;

const BackDrop = styled.div`
  width:160%;
  position:absolute;
  height: 550px;
  display:flex;
  flex-direction:column;
  border-radius:50%;
`;

export function AccountBox(props) {
  return(
      <>
       <BoxContainer>
       <TopContainer>
       <BackDrop/>
       <MyForm/>
       </TopContainer>
       </BoxContainer>
      </>
  )
}

/*background: rgb(2,0,36);
  background: linear-gradient(
  90deg,
  rgba(2,0,36,1) 0%, 
  rgba(9,9,109,1) 35%, 
  rgba(0,212,255,1) 100%
  );*/