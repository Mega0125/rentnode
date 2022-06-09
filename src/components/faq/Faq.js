import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

import { UnderlineImg, ShineImg, DirectImg } from "../../constant/images";
import { Faqs } from "../../constant/faqs";

const Faq = () => {
  const [flags, setFlags] = useState([true, true, true, true, true, true, true, true, true]);
  const [please, setPlease] = useState(false);
  const changeFlags = (ind) => {
    flags[ind] = !flags[ind];
    setFlags(flags);
    setPlease(!please)
  }
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [flags, please])
  return (
    <Wrapper>
      <LeftDiv>
        <Title>
          <p data-aos="zoom-in" data-aos-duration="1000">Frequently</p>
          <p data-aos="zoom-in" data-aos-duration="1000">Asked<img src={UnderlineImg}></img></p>
          <p data-aos="zoom-in" data-aos-duration="1000">Questions</p>
          <p data-aos="zoom-in" data-aos-duration="1000">
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
      <RightDiv>
        {
          Faqs.map((item, index) => (
            <FaqItem flag={flags[index]} key={index} onClick={() => changeFlags(index)} data-aos="flip-down" data-aos-duration="1000">
              <div>
                <p> {item[0]} </p>
                <div>
                  <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true" data-testid="AddRoundedIcon"><path d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"></path></svg>
                </div>
              </div>
              <div><p>
                {item[1]}
              </p></div>
            </FaqItem>
          ))
        }
      </RightDiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #C8BCFF;
  padding: 6% 8%;
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

const LeftDiv = styled.div`
  flex-basis: 50%;
  -webkit-box-flex: 0;
  flex-grow: 0;
  width: 50%;
  box-sizing: border-box;
  margin: 0px;
  padding: 0% 7%;
  @media (max-width: 900px) {
    width: 100%;
  }
`

const Title = styled.div`
  color: #373535;
  font-family: Montserrat;
  line-height: 1.167;
  font-size: 70px;
  font-weight: 300;
  @media (max-width: 450px) {
    font-size: 40px;
  }
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
  flex-grow: 0;
  width: 50%;
  margin: 0px;
  padding-top: 21% !important;
  display: flex !important;
  flex-direction: column !important;
  @media (max-width: 900px) {
    width: 100%;
  }
`
// width: 32px;
// background-color: white;
// display: flex;
// height: 32px;
// border-radius: 20px;
// color: rgba(0, 0, 0, 0.54);
const FaqItem = styled.div`
  padding: 14px 0!important;
  cursor: pointer;
  background-color: #c8bcff;
  border-bottom: 2px solid #dbd5f7;
  border-top: 2px solid #dbd5f7;
  box-shadow: none;
  color: #373535;
  & div:nth-child(1) {
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    transition: margin 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    font-weight: 900;
    line-height: 1.5;
    text-align: left;
    font-family: Montserrat;
    & div:nth-child(2) {
      width: 32px;
      display: flex;
      height: 32px;
      border-radius: 20px;
      color: rgba(0, 0, 0, 0.54);
    }
    &:hover div:nth-child(2) {
      background-color: white;
    }
  }
  & div:nth-child(2) {
    box-sizing: border-box;
    color: #373535!important;
    font-size: 14px;
    overflow: hidden;
    transition: all 0.3s ease-out;
    p {
      display: ${props => props.flag ? "none" : "black"}!important;
      margin: 0px;
      font-family: Montserrat;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      text-align: left;
      margin-bottom: 20px;
    }
  }
`

export default Faq;