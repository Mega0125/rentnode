import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { DirectdownImg } from "../../constant/images";

const ContactUs = () => {
  return (
    <Wrapper>
      <Container>
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
  background-color: white;
`

const Container = styled.div` 
  display: flex;
  padding: 10% 12%;
  position: relative;
  align-items: center;
  flex-direction: column !important;
  justify-content: space-evenly;
  font-family: Montserrat;
  color: #373535;
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
    background-color: #BEFFBD;
    text-decoration: none;
    width: 200px;
    height: 56px;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: bold;
    border-radius: 40px;
    color: #373535;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
  }
`

export default ContactUs