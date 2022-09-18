import React from "react";
import styled from "styled-components";

const Card = (props) => {
  return <Div>{props.children}</Div>;
};

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  width: 820px;
  margin: 0 auto;
  height: auto;
  border-radius: 8px;
  margin-top: 1rem;
`;

export default Card;
