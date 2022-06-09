import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

import { MetamaskImg } from "../../constant/images";
import { Decoration1Img } from "../../constant/images";

const Metamask = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <Wrapper>
      <LeftDiv data-aos="flip-left" data-aos-duration="1500">
        <img src={MetamaskImg}></img>
      </LeftDiv>
      <RightDiv data-aos="flip-right" data-aos-duration="1500">
        <span>1 month</span>
        <span> $20
          <img src={Decoration1Img} />
        </span>
        <p>Private node <span>for Metamask</span></p>
        <div>
          <button>Video Guide</button>
          <button>Order Now</button>
        </div>
      </RightDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: center;
  padding: 6% 8%;
  background-color: #EAFFEA;
  margin: 0;
  margin-top: 100px;
`

const LeftDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
`

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: #373535;
  width: 50%;
  justify-content: center;
  align-items: center;
  & span:nth-child(1) {
    margin: 0px;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.5;
    font-size: 30px!important;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }
  & span:nth-child(2) {
    margin: 0px;
    padding: 2% 0%;
    font-size: 60px!important;
    font-family: Montserrat!important;
    position: relative;
    width: auto;
    font-weight: bold;
    width: 30%;
  }

  & span:nth-child(2) img {
    position: absolute;
    top: -20px;
    left: 50px;
    @media (max-width: 475px) {
      display: none;
    }
  }

  & p:nth-child(3) {
    margin: 0;
    font-family: Montserrat !important;
    font-size: 40px !important;
    width: 100%;
    span {
      font-size: 48px;
      font-weight: bold;
      line-height: 10px;
      line-height: 30px;
    }
  }
  & div:nth-child(4) {
    button {
      color: #6F6C90;
      padding: 10px 30px;
      width: 200px!important;
      height: 56px!important;
      font-size: 15px!important;
      font-family: Montserrat!important;
      font-weight: bold;
      border-color: #6F6C90 !important;
      border-radius: 40px!important;
      margin-top: 40px;
      display: inline-block;
      margin: 10px;
    }
    & button:nth-child(2) {
      background-color: rgb(255, 203, 60);
      border: 0;
      color: rgb(55, 53, 53);;
    }
  }
`

export default Metamask