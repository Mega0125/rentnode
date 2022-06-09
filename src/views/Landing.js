import React from "react";
import styled from "styled-components";
import Header from "../components/header/Header";
import Plans from "../components/plans/Plans";
import Belt from "../components/belt/Belt";
import Savetime from "../components/savetime/Savetime";
import Metamask from "../components/metamask/Metamask";
import Faq from "../components/faq/Faq";
import { LandImg } from "../constant/images";

const Landing = () => {
  return (
    <Wrapper>
      <Header />
      <Land>
        <LandLeftDiv>
          <h1>RENT NODE</h1>
          <span>
            We make it ridiculously easy to get access to private nodes. No strings attached.
          </span>
          <button>
            Video Guide
          </button>
        </LandLeftDiv>
        <LandRightDiv>
          <img src={LandImg} />
        </LandRightDiv>
      </Land>
      <Plans />
      <Belt />
      <Savetime />
      <Metamask />
      <Faq />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  
`;

const Land = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
  gap: 5%;
  @media (max-width: 1000px) {
    justify-content: space-around
  }
  @media (max-width: 850px) {
    justify-content: space-between
  }
  @media (max-width: 740px) {
    flex-direction: column;
  }
`;

const LandLeftDiv = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  h1 {
    font-size: 70px;
    font-family: Montserrat;
    font-weight: 300;
    line-height: 1.167;
    white-space: nowrap;
    font-weight: bold;
    color: #373535;
    margin-bottom: 40px;
    @media (max-width: 740px) {
      font-size: 50px;
    }
    @media (max-width: 320px) {
      font-size: 30px;
    }
  }
  span {
    color: #373535;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 400;
    text-align: left;
    line-height: 24.8px !important;
  }
  button {
    padding: 10px 30px;
    color: #6F6C90 !important;
    width: 200px!important;
    height: 56px!important;
    font-size: 14px!important;
    font-family: Montserrat!important;
    border-color: #6F6C90 !important;
    border-radius: 40px!important;
    font-weight: bold;
    margin-top: 40px;
    display: inline-block;
  }
  @media (max-width: 740px) {
    width: 100%;
    margin-bottom: 80px;
  }
`;

const LandRightDiv = styled.div`
  display: flex;
  margin-right: 20px;
  width: 40%;
  img {
    padding: 0;
    width: 100%;
  }
  @media (max-width: 740px) {
    width: 80%;
  }
`;

export default Landing;