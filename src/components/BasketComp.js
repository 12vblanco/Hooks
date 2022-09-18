import { Input } from "antd";
import React, { useState } from "react";
import styled from "styled-components";

const BasketComp = (props) => {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(Math.max(count - 1, 0));
  };

  return (
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
  );
};

const BasketDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  flex: 1;
`;

export default BasketComp;
