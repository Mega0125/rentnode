import React from 'react';
import styled from 'styled-components';

import { RingImg } from '../../constant/images';
import { Ring1Img } from '../../constant/images';
import { SnowImg } from '../../constant/images';

const belt = () => {
  return (
    <Wrapper>
      <span> Save
        <img src={RingImg} />
        <img src={Ring1Img} />
      </span>
      <span> big time <img src={SnowImg}></img></span>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  padding: 30px;
  font-size: 69px;
  margin-top: 100px;
  @media (max-width: 600px) {
    font-size: 40px;
  }
  & span:nth-child(1) {
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.167;
    color: white;
    position: relative;
  }

  & span:nth-child(1) img:nth-child(1) {
    position: absolute;
    right: -24px;
    @media (max-width: 600px) {
      display: none;
    }
  }

  & span:nth-child(1) img:nth-child(2) {
    position: absolute;
    display: none;
    @media (max-width: 600px) {
      top: -14px;
      right: -10px;
      display: block;
    }
  }

  & span:nth-child(2) {
    font-family: Montserrat;
    font-weight: bold;
    line-height: 1.167;
    color: white;
    position: relative;
  }

  & span:nth-child(2) img {
    position: absolute;
  }
`

export default belt;