import React from "react";
import styled from "styled-components";

const Card = ({ img, texts, title, description }) => {
  return (
    <Container>
      <img src={img} alt="img of project" />
      <div className="text-introduction">
        <h4>{title}</h4>
        <p>{description}</p>
        <nav className="project-options">
          <a>{texts.projectOption1}</a>
          <a>{texts.projectOption2}</a>
        </nav>
      </div>
    </Container>
  );
};

export default Card;

const Container = styled.div`
  position: relative;
  display: grid;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  max-height: 30rem;
  color: var(--text-color);
  background: var(--background-second);
  transition: all 0.5s;
  box-shadow: 3px 3px 15px #44484488;

  &:hover {
    box-shadow: 5px 5px 10px #333;
  }
  &:hover > .text-introduction {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
  }

  .text-introduction {
    position: absolute;
    border-radius: 1rem;
    opacity: 0;
    background: linear-gradient(
      to bottom,
      transparent,
      var(--background-second),
      var(--background-second),
      var(--background-second)
    );
    width: 100%;
    height: 80%;
    padding: 0.5rem;
    padding-top: 4rem;
    padding-left: 0.8rem;
    display: grid;
    grid-template-rows: 20% 60% 20%;
    bottom: 0;
    transition: all 0.5s;

    h4 {
      font-size: 1.3rem;
      width: 100%;
      height: 100%;
      color: var(--first-color);
    }

    p {
      max-height: 10rem;
      overflow: auto;
      font-size: 0.8rem;
      padding: 0.5rem;
    }

    .project-options {
      height: 100%;
      width: 100%;

      a {
        padding: 0.2rem 0.5rem;
        background-color: var(--first-color);
        border-radius: 0.5rem;
        height: 2rem;
        margin-left: 0.5rem;
        cursor: pointer;
        &:hover {
          background-color: var(--second-color);
        }
      }
    }
  }
`;
