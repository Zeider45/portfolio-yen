import React from "react";
import styled from "styled-components";

const Card = ({ img, texts }) => {
  return (
    <Container>
      <img src="" alt="" />
      <div className="text">
        <p></p>
        <nav>
          <button></button>
          <button></button>
        </nav>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  background: red;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
`;
