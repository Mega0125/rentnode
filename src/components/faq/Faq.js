import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

import { UnderlineImg, PlusImg, DirectImg } from "../../constant/images";
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
    <Wrapper id="faq">
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
            <img src={DirectImg} style={{ color: "white" }}></img>
          </div>
        </Title>
      </LeftDiv>
      <RightDiv>
        {
          Faqs.map((item, index) => (
            <FaqItem flag={flags[index]} key={index} onClick={() => changeFlags(index)} data-aos="flip-down" data-aos-duration="1000">
              <div>
                <div>
                  <p> {item[0]} </p>
                </div>
                <div>
                  <img src={PlusImg}></img>
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
  background-color: transparent;
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
  color: white;
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
  background-color: transparent;
  border-bottom: 2px solid #dbd5f7;
  border-top: 2px solid #dbd5f7;
  box-shadow: none;
  color: white;
  & div:nth-child(1) {
    display: flex;
    -webkit-box-flex: 1;
    flex-grow: 1;
    transition: all 0.5s;
    justify-content: space-between;
    align-items: center;
    font-size: 26px;
    font-weight: 900;
    line-height: 1.5;
    text-align: left;
    font-family: Montserrat;
    & div:nth-child(1) {
      width: 80%;
    }
    & div:nth-child(2) {
      width: 32px;
      display: flex;
      height: 32px;
      border-radius: 20px;
      color: rgba(255, 255, 255, 0.54);
    }
    &:hover div:nth-child(2) {
      transform: scale(1.1);
      transform: ${props => props.flag ? "rotate(0)" : "rotate(45deg)"};
    }
  }
  & div:nth-child(2) {
    box-sizing: border-box;
    color: rgba(255, 255, 255, 0.54);
    font-size: 14px;
    overflow: hidden;
    transition: all 0.3s ease-out;
    p {
      display: ${props => props.flag ? "none" : "black"};
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