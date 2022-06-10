import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { DirectdownImg } from "../../constant/images";

const ContactUs = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <Wrapper>
      <Container data-aos="fade-down" data-aos-duration="1000">
        <p>Write us right now for more awesome info</p>
        <p>We will help you in everything you need<img src={DirectdownImg}></img></p>
        <a href="https://discord.gg/anDJ2wpnSz"><span>Contact us</span></a>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  -webkit-box-pack: center;
  justify-content: center;
  padding: 0 8px;
  background-color: transparent;
`

const Container = styled.div` 
  display: flex;
  padding: 10% 12%;
  position: relative;
  align-items: center;
  flex-direction: column !important;
  justify-content: space-evenly;
  font-family: Montserrat;
  color: white;
  & p:nth-child(1) {
    font-weight: 800;
    line-height: 1.167;
    margin: 0px;
    font-size: 32px;
  }

  & p:nth-child(2) {
    margin: 0px;
    font-size: 20px;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.235;
    padding-top: 4%;
    position: relative;
    img {
      position: absolute;
      left: 0px;
      bottom: -80px;
    }
  }
  a {
    text-decoration: none;
    width: 200px;
    height: 56px;
    font-size: 16px;
    border: 2px solid white;
    font-family: Montserrat;
    font-weight: ;
    border-radius: 40px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    background: rgba(255,255,255,0.1);
  }
`

export default ContactUs