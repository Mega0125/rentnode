import React from "react";
import styled from "styled-components";

import { UnderlineImg, ShineImg, DirectImg } from "../../constant/images";

const Faq = () => {
  return (
    <Wrapper>
      <LeftDiv>
        <Title>
          <p>Frequently</p>
          <p>Asked<img src={UnderlineImg}></img></p>
          <p>Questions</p>
          <p>
            RentNode is a blockchain-as-a-service solution
            that lets users get access to full Nodes. The service
            provides a high-quality infrastructure that is quick,
            cost-effective, and reliable with 24/7 customer
            support.
          </p>
          <div>
            <img src={DirectImg}></img>
          </div>
        </Title>
      </LeftDiv>
      <RightDiv></RightDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #C8BCFF;
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 6% 8%;
  position: relative;
  align-items: flex-start;
  flex-direction: column !important;
  justify-content: flex-start;
`;

const LeftDiv = styled.div`
  flex-basis: 50%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 50%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0% 7%;
`

const Title = styled.div`
  color: #373535;
  font-family: Montserrat;
  line-height: 1.167;
  font-size: 70px;
  font-weight: 300;
  p {
    margin: 0;
    padding: 0;
  }
  & p:nth-child(1) {
    font-family: 'Montserrat', sans-serif;
  }
  & p:nth-child(2) {
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    position: relative;
    img {
      position: absolute;
      bottom: 0;
      left: 0;
    }
  }
  & p:nth-child(3) {
    font-weight: bold
  }
  & p:nth-child(4) {
    margin: 0px;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 400;
    padding: 15% 0%;
    text-align: left;
    line-height: 24.8px !important;
    white-space: pre-line;
  }
  & div:nth-child(5) {
    padding: 0;
  }
`

const RightDiv = styled.div`
  flex-basis: 50%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  max-width: 50%;
  margin: 0px;
  padding-top: 21% !important;
  display: flex !important;
  flex-direction: column !important;
`

export default Faq;