import { Input } from "antd";
import React, { useState } from "react";
import { BsFillBasket2Fill } from "react-icons/bs";
import styled from "styled-components";
import Card from "../UI/Card";

const TextItem = (props) => {
  const [show, toggleShow] = useState(true);
  const [count, setCount] = useState(0);

  const showCounter = () => {
    toggleShow(!show);
  };

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(Math.max(count - 1, 0));
  };

  return (
    <Card>
      <DivFlex>
        <ImgDiv>
          <img src={props.image} alt={props.alt} />
        </ImgDiv>
        <TitleDiv>
          <h1>{props.title}</h1>
          <h3>{props.subtitle}</h3>
        </TitleDiv>
        {show && (
          <PriceDiv>
            <h2>{props.price}</h2>
            <h2>{props.uom}</h2>
          </PriceDiv>
        )}
        <EditDiv>
          <Button onClick={showCounter}>
            {show ? <BsFillBasket2Fill /> : "Show details"}
          </Button>
        </EditDiv>
        {!show && (
          <BasketDiv style={{ alignItems: "flex-start", marginLeft: "3%" }}>
            <span
              onClick={increaseCount}
              style={{ fontSize: "65px", cursor: "pointer" }}
            >
              +
            </span>
            <Input
              value={count}
              size="large"
              style={{
                width: "50px",
                height: "30px",
                position: "relative",
                top: "26px",
                fontSize: "32px",
                textAlign: "centre",
              }}
              placeholder="0"
            />
            <span
              onClick={decreaseCount}
              style={{ fontSize: "65px", cursor: "pointer" }}
            >
              -
            </span>
          </BasketDiv>
        )}
      </DivFlex>
    </Card>
  );
};

const DivFlex = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 800px;
  height: 140px;
  padding-left: 12px;
`;

const ImgDiv = styled.div`
  width: 90px;
  height: 90px;
  margin-right: 3%;

  img {
    max-width: 100%;
    height: 100%;
    border-radius: 6px;
  }
`;

const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 30%;
  margin-right: 3%;
`;
const PriceDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 20%;
  margin-right: 3%;
`;
const EditDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: auto;
  margin-left: 3%;
`;
const Button = styled.div`
  outline: none;
  border: none;
  background: maroon;
  color: white;
  padding: 1.2rem 1.8rem;
  font-size: 22px;
  border-radius: 8px;
  cursor: pointer;
`;

const BasketDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

export default TextItem;
