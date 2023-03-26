import React from "react";
import styled from "styled-components";

const Card = ({ img, texts }) => {
  return (
    <Container>
      <img src={img} alt="img of proyect" />
      <div className="text-introduction">
        <h4>title proyect</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
          repellat corrupti excepturi vero, vitae optio harum labore pariatur
          eius similique natus est debitis ex obcaecati reprehenderit corporis
          quasi voluptatibus sequi.
        </p>
        <nav className="proyect-options">
          <a>view proyect</a>
          <a>view code</a>
        </nav>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  max-height: 30rem;
  grid-template-columns: 50% 50%;
  color: var(--text-color);
  background: var(--background-second);
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 0%;
  }

  .text-introduction {
    width: 100%;
    height: 100%;
    padding: 0.5rem;
    padding-left: 0.8rem;
    display: grid;
    grid-template-rows: 10% 80% 20%;

    h4 {
      margin-bottom: 0.5rem;
      font-size: 1rem;
      color: var(--first-color);
    }

    p {
      max-height: 10rem;
      overflow: auto;
      font-size: 0.8rem;
    }

    .proyect-options {
      height: 100%;
      width: 100%;
    }
  }
`;
