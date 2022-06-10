import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";
import "aos/dist/aos.css";
import { plans } from "../../constant/plans";

const Plans = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <Wrapper id="plans">
      <TitleDiv data-aos="fade-down" data-aos-duration="1000">
        <h1>Choose <span>your plan</span></h1>
      </TitleDiv>
      <PlanList>
        {
          plans.map((item) => (
            <Plan key={item.id} btnColor={item.color} flag={0} data-aos={item.animation} data-aos-duration="1000">
              <span>{item.name}</span>
              <span>{item.price}</span>
              {
                item.contents.map((item1) => (
                  <span>
                    {
                      item1
                    }
                  </span>
                ))
              }
              <button>
                Other Now
              </button>
            </Plan>
          ))
        }
      </PlanList>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: 50px;
`

const TitleDiv = styled.div`
  text-align: center;
  h1 {
    margin: 0px 0px 0.35em;
    font-size: 70px;
    font-family: Montserrat;
    font-weight: 400;
    line-height: 1.167;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    color: white;
  }

  h1 span {
    font-family: Montserrat;
    font-weight: bold;
  }
`

export const PlanList = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: auto;
  gap: 20px;
  & div:nth-child(2) {
    /* box-shadow: 3px 3px 5px 5px lightgrey; */
  }
`;

export const Plan = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  font-family: Montserrat;
  padding: 20px;
  transition: all 0.4s;
  &:hover {
    transform: scale(1.1);
    background: linear-gradient(136.53deg, #1638BA 0%, #2A3375 97.47%);
    box-shadow: 0 1px 2px 0 white;
    border-radius: 16px;
    /* box-shadow: 3px 3px 5px 5px lightgrey; */
  }
  & span:nth-child(1) {
    color: white;
    margin: 0px 0px 0.35em;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.235;
  }
  & span:nth-child(2) {
    color: white;
    margin: 0px 0px 0.35em;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  & span:nth-child(n+3) {
    margin-bottom: 8%;
    color: white;
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 200;
    line-height: 1.334;
  }

  button {
    display: inline-flex;
    width: 140px;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 1px solid white;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    font-weight: 500;
    line-height: 1.75;
    min-width: 64px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    border-radius: 20px;
    font-family: Montserrat;
    color: white;
    font-size: 12px;
    padding: 10px 30px;
    margin: auto;
    margin-top: 30px;
    box-shadow: none;
    font-size: 14px !important;
    font-weight: bold;
    background-color: transparent;
  }
`

export default Plans;