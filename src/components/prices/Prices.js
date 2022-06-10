import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styled from "styled-components";

import { prices } from "../../constant/prices";
import { CryptonodeImg } from "../../constant/images";
import { cryptonode_vmImg } from "../../constant/images";

const Prices = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <Wrapper>
      <Container>
        <Divs>
          {/* <div>
            <img src={CryptonodeImg}></img>
            <p>1 node with unlimited calls/requests</p>
            <p>50$</p>
          </div> */}
          {
            prices.crypto.map((item, index) => (
              <div key={index} data-aos={item.animation} data-aos-duration="1000">
                <img src={cryptonode_vmImg}></img>
                <p>{item.desc}</p>
                <p>{item.price}$</p>
              </div>
            ))
          }
        </Divs>
        <Divs>
          {
            prices.crypto_vm.map((item, index) => (
              <div key={index} data-aos={item.animation} data-aos-duration="1000">
                <img src={CryptonodeImg}></img>
                <p>{item.desc}</p>
                <p>{item.price}$</p>
              </div>
            ))
          }
        </Divs>
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  padding: 10px;
  margin-top: 50px;
`
const Container = styled.div`
  
`

const Divs = styled.div`
  color: white;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 10px;
  margin-top: 50px;
  div {
    text-align: center;
    margin-top: 40px;
    width: 250px;
    background: linear-gradient(136.53deg, #1638BA 0%, #2A3375 97.47%);
    border-radius: 26px; 
    img {
      width: 90%;
      height: 200px;
    }
    & p:nth-child(2) {
      margin-bottom: 8%;
      color: white;
      font-size: 20px;
      font-family: Montserrat;
      font-weight: 200;
      line-height: 1.334;
    }
    & p:nth-child(3) {
      color: white;
      font-size: 30px;
      font-family: Montserrat;
      font-weight: bold;
      line-height: 1.334;
    }
  }
`

export default Prices;