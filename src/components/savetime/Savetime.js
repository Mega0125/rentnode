import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";
import { Plan, PlanList } from "../plans/Plans";

import { SaveTime } from '../../constant/plans';

const Savetime = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <Wrapper>
      <PlanList>
        {
          SaveTime.map((item) => (
            <Plan key={item.id} btnColor={item.color} flag={1} data-aos={item.animation} data-aos-duration="1000">
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
  margin-top: 150px;
`

export default Savetime;
