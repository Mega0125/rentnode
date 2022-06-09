import React, { useEffect } from "react";
import styled from "styled-components";
import ReactPlayer from 'react-player';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../components/header/Header";
import Plans from "../components/plans/Plans";
import Belt from "../components/belt/Belt";
import Savetime from "../components/savetime/Savetime";
import Metamask from "../components/metamask/Metamask";
import Faq from "../components/faq/Faq";
import ContactUs from "../components/contansUs/ContactUs";
import Footer from "../components/footer/footer";
import { LandImg, RentnodeImg, Video1, BgImg } from "../constant/images";
const Landing = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <Wrapper>
      <Header />
      <Land>
        <LandLeftDiv data-aos="fade-right" data-aos-duration="1000">
          <img src={RentnodeImg}></img>
          <span>
            We make it ridiculously easy to get access to private nodes. No strings attached.
          </span>
          <button>
            Video Guide
          </button>
        </LandLeftDiv>
        <LandRightDiv data-aos="fade-left" data-aos-duration="1000">
          <img src={LandImg} />
        </LandRightDiv>
      </Land>
      <Plans />
      <Belt />
      <Savetime />
      <Metamask />
      <Faq />
      <ContactUs />
      <Footer />
      <ReactPlayer
        className='react-player'
        url={Video1}
        width='400px'
        height='300px'
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: url(${BgImg});
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
  & img:nth-child(1) {
    margin-bottom: 50px;
  }
  span {
    color: white;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 400;
    text-align: left;
    line-height: 24.8px !important;
  }
  button {
    padding: 10px 30px;
    width: 200px;
    height: 56px;
    font-size: 14px;
    font-family: Montserrat;
    border-color: white ;
    background-color: transparent;
    color: white;
    border-radius: 40px;
    font-weight: bold;
    margin-top: 40px;
    margin-left: 30%;
    display: inline-block;
    @media (max-width: 500px) {
      margin-left: 20%;
    }
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