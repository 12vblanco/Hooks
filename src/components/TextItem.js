import React, { useState } from "react";
import styled from "styled-components";
import Card from "../UI/Card";

const TextItem = (props) => {
  // const onClickHandler = (toggleShow) => {
  //   console.log("clicked");
  //   {
  //     !show;
  //   }
  // };

  const [show, toggleShow] = useState(true);

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

        {!show && (
          <PriceDiv>
            <h2>something else</h2>
            <h2>new</h2>
          </PriceDiv>
        )}
        <EditDiv>
          <Button onClick={() => toggleShow(!show)}>
            {show ? "Show other" : "Show price"}
          </Button>
        </EditDiv>
      </DivFlex>
    </Card>
  );
};

const DivFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 140px;
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

export default TextItem;
