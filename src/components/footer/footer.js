import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { header_json } from '../../constant/header';

import { UnderlineyellowImg } from "../../constant/images";

const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <div>
          {
            header_json.map((item, index) => (
              <span>
                <Link style={LinkStyle} to={item.link} key={index}>{item.name}</Link>
              </span>
            ))
          }
          <img src={UnderlineyellowImg}></img>
        </div>

        <div>
          <a href="https://t.me/RentNode">Telegram</a>
          <a href="https://discord.gg/anDJ2wpnSz">Discord</a>
        </div>
        <p>Copyright © 2022 Rent node. All rights reserved.</p>
      </Container>
    </Wrapper>
  )
}

const LinkStyle = {
  textDecoration: "none",
  color: "#373535",
  fontWeight: "bold"
}
const Wrapper = styled.div`
  display: flex ;
  padding: 3% 8%;
  align-items: center;
  flex-direction: column ;
  justify-content: space-between;
  background-color: #BEFFBD;
`

const Container = styled.div`
  text-align: center;
  color: #373535;
  font-family: Montserrat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & div:nth-child(1) {
    display: flex;
    justify-content: center;
    gap: 30px;
    list-style: none;
    position: relative;
    margin-bottom: 30px;
    margin-top: 40px;
    span {
      font-size: 14px
    }
    img {
      position: absolute;
      bottom: -10px;
      right: 33%;
    }
  }
  & div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    a {
      text-decoration: none;
      color: #373535;
      font-family: Montserrat;
      font-size: 12px;
    }
  }

  & p:nth-child(3) {
    margin: 0px;
    font-family: Montserrat;
    font-weight: 400;
    color: #828282;
    font-size: 12px;
    margin-top: 10%;
  }
`
export default Footer