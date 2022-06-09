import React from "react";
import styled from "styled-components";
import { Plan, PlanList } from "../plans/Plans";

import { SaveTime } from '../../constant/plans';

const Savetime = () => {
  return (
    <Wrapper>
      <PlanList>
        {
          SaveTime.map((item) => (
            <Plan key={item.id} btnColor={item.color} flag={1}>
              <span>{item.name}</span>
              <span>{item.title}</span>
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
