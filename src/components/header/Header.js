import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import styled from "styled-components";

// Json data
import { header_json } from "../../constant/header";
import { ResbtnImg, LogoImg } from "../../constant/images";
import { contact } from "../../constant/contact";


const Header = () => {
  const [isRes, setRes] = useState(false);
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <Wrapper>
      <LeftDIV data-aos="fade-up">
        <img src={LogoImg}></img>
      </LeftDIV>
      <RightDIV data-aos="fade-up">
        <MainNav>
          {header_json.map((item) => (
            <a href={item.link} key={item.key}>{item.name}</a>
          ))}
        </MainNav>
      </RightDIV>
      <Resbtn onClick={() => setRes(!isRes)} />
      <ResDiv disp={isRes}>
        <ResTopDiv>
          <CloseBtn><span></span><svg onClick={() => setRes(false)} viewBox="0 0 24 24" style={{ marginRight: "20px", width: "24px", height: "24px", color: "rgb(55, 53, 53)" }}><path d="M18.3 5.71a.9959.9959 0 0 0-1.41 0L12 10.59 7.11 5.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg></CloseBtn>
          <ResNav>
            {header_json.map((item) => (
              <li key={"res" + item.key} onClick={() => setRes(false)}>
                <Link to={item.link} key={"A" + item.key}>{item.name}</Link>
              </li>
            ))}
          </ResNav>
        </ResTopDiv>
        <ResBotDiv>
          {
            contact.map((item) => (
              <a href={item.url} key={item.id} style={{ backgroundColor: item.color }}>{item.name}</a>
            ))
          }
        </ResBotDiv>
      </ResDiv>
    </Wrapper >
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  padding: 30px 0;
  margin: 0;
`;

const LeftDIV = styled.div`
  /* border-left: 1px solid black;
  border-right: 1px solid black; */
  width: 400px;
  height: 40px;
  overflow: hidden;
  position: relative;
  margin-left: 20px;
  @media (max-width: 485px) {
    width: 70%;
  }
`

const RightDIV = styled.div`
  display: flex;
  margin: 0;
  justify-content: center;
`;

const MainNav = styled.div`
  a {
    text-decoration: none;
    font-family: Montserrat;
    background-color: transparent;
    border: 1px solid white;
    font-size: 12px;
    color: white;
    padding: 7px 30px;
    border-radius: 20px;
    font-weight: 500;
    line-height: 1.75;
    min-width: 64px;
    margin-right: 10px;
  }
  @media (max-width: 750px) {
    display: none;
  }
`
const Resbtn = styled.div`
  display: none;
  position: fixed;
  right: 10px;
  @media (max-width: 750px) {
    display: block;
  }
  background-image: url(${ResbtnImg});
  width: 61px;
  height: 61px;
  background-repeat: no-repeat;
  background-position: center;
`;

const ResDiv = styled.div`
  z-index: 1;
  flex-direction: column;
  position: fixed;
  overflow-y: auto;
  right: 0;
  top: 0;
  width: 240px;
  height: 100vh;
  background: linear-gradient(136.53deg,#1638BA 0%,#2A3375 97.47%);
  display: ${props =>
    props.disp ? 'flex' : 'none'
  };
  justify-content: space-between;
`;

const ResTopDiv = styled.div`
  width: 100%;
  height: 100vh;
`

const CloseBtn = styled.div`
  height: 64px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 30px;
`;

const ResNav = styled.ul`
  list-style: none;
  padding: 0px;
  li {
    font-size: 18px;
    box-sizing: border-box;
    text-align: left;
    font-family: Montserrat;
    padding: 15px 0;
    padding-left: 20px;
    cursor: pointer;
    font-weight: bold;
  }
  li:hover{
    background-color: lightblue;
  }
  li a {
    text-decoration: none;
    color: white;
  }
`

const ResBotDiv = styled.div`
  margin-bottom: 20px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  a {
    text-decoration: none;
    padding: 10px;
    margin-bottom: 10px;
    width: 122px;
    border-radius: 20px;
    text-align: center;
    color: white;
    font-weight: bold;
  }
`

export default Header;