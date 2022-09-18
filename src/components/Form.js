import React from "react";
import styled from "styled-components";

const Form = () => {
  const cancel = () => {
    console.log("cancelled");
  };
  const enter = () => {
    console.log("entered");
  };

  return (
    <form>
      <Row>
        <div>
          <label htmlFor="enterTitle">Enter Title</label>
          <input
            type="text"
            id="enterTitle"
            name="enterTitle"
            placeholder="Enter a title"
          ></input>
        </div>
        <div>
          <label htmlFor="enterSubtitle">Enter Subtitle</label>
          <input
            type="text"
            id="enterSubtitle"
            name="enterSubtitle"
            placeholder="Enter a Subtitle"
          ></input>
        </div>
      </Row>
      <Row>
        <div>
          <label htmlFor="enterPrice">Enter Price</label>
          <input
            type="text"
            id="enterPrice"
            name="enterPrice"
            placeholder="Enter a Price"
          ></input>
        </div>
        <div>
          <label htmlFor="enterUom">Enter Unit</label>
          <input
            type="text"
            id="enterUom"
            name="enterUom"
            placeholder="Enter a Unit"
          ></input>
        </div>
      </Row>
      <Row>
        <Button onClick={cancel}>Cancel</Button>
        <Button onClick={enter}>Press to Enter</Button>
      </Row>
    </form>
  );
};

const Row = styled.div`
  display: flex;
  padding: 12px;
  width: 100%;
  justify-content: flex-end;

  label {
    font-size: 22px;
    margin-right: 6px;
  }
  input {
    font-size: 22px;
    margin-right: 22px;
  }
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
  margin-right: 18px;
  margin-top: 28px;
`;

export default Form;
