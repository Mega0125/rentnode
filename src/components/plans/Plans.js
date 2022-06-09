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
    <Wrapper>
      <TitleDiv data-aos="fade-down" data-aos-duration="1000">
        <h1>Choose <span>your plan</span></h1>
      </TitleDiv>
      <PlanList>
        {
          plans.map((item) => (
            <Plan key={item.id} btnColor={item.color} flag={0} data-aos={item.animation} data-aos-duration="1000">
              <span>{item.name}</span>
              <span>Daily per {item.name}</span>
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
    color: #373535;
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
  color: rgb(79, 79, 79);
  font-family: Montserrat;
  padding: 10px;
  transition: all 0.3s;
  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 3px 5px 5px lightgrey;
  }
  & span:nth-child(1) {
    color: rgb(55, 53, 53);
    margin: 0px 0px 0.35em;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.235;
  }
  & span:nth-child(2) {
    margin: 0px 0px 0.35em;
    line-height: 1.6;
    font-size: ${props => props.flag === 0 ? "14px" : "20px"};
    font-weight: ${props => props.flag === 0 ? 500 : "bold"};
    color: ${props => props.flag === 0 ? "rgb(189, 189, 189)" : "rgb(255, 203, 60)"}
  }
  & span:nth-child(3) {
    color: rgb(55, 53, 53);
    margin: 0px 0px 0.35em;
    font-size: 40px;
    font-weight: 600;
    line-height: 1.2;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  & span:nth-child(n+4) {
    margin-bottom: 8%;
    color: rgb(79, 79, 79);
    font-size: 16px;
    font-family: Montserrat;
    font-weight: 400;
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
    border: 0px;
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
    color: rgb(55, 53, 53);
    font-size: 12px;
    padding: 10px 30px;
    margin: auto;
    margin-top: 30px;
    box-shadow: none;
    font-size: 14px !important;
    font-weight: bold;
    background-color: ${props => props.btnColor}
  }
`

export default Plans;