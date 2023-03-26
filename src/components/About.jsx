import styled from "styled-components";
import react from "../assets/react.png";
import js from "../assets/js.png";
import msq from "../assets/msq.png";
import njs from "../assets/njs.png";
import mbd from "../assets/mdb.png";

const About = ({ texts }) => {
  return (
    <Container>
      <div className="text-main-about">
        <p>{texts.aboutMe}</p>
      </div>
      <div className="technologies">
        <h3>{texts.textTecnologies}</h3>
        <div className="container-skills">
          <div className="skills-line-1">
            <img src={js} alt="" />
            <img src={react} alt="" />
            <img src={njs} alt="" />
          </div>
          <div className="skills-line-2">
            <img src={msq} alt="" />
            <img src={mbd} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 60% 40%;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  animation: showing 0.7s;
  .text-main-about {
    width: 70%;
    margin: auto;
    font-size: 1rem;
    color: var(--text-color);
  }

  .technologies {
    display: grid;
    width: 100%;
    height: 80%;
    grid-template-rows: 20% 80%;
    h3 {
      font-size: 1rem;
      font-weight: normal;
      color: var(--text-color);
    }

    .container-skills {
      display: grid;
      width: 100%;
      grid-template-rows: 50% 50%;
      grid-template-columns: 1fr;
      justify-content: center;
      gap: 1rem;
      .skills-line-1 {
        display: flex;
        width: 100%;
        justify-content: space-around;
        margin: auto;
        img {
          height: 3rem;
          width: 3rem;
        }
      }
      .skills-line-2 {
        display: flex;
        margin: auto;
        width: 60%;
        justify-content: space-around;
        img {
          height: 3rem;
          width: 3rem;
        }
      }
    }
  }
  @media screen and (min-width: 720px) {
    grid-template-rows: 40% 60%;
    font-size: 2rem;
    max-width: 1070px;
    margin: auto;

    .text-main-about {
      width: 100%;
      font-size: 1.3rem;
    }

    .technologies {
      display: grid;
      width: 100%;
      height: 80%;
      grid-template-rows: 20% 80%;
      h3 {
        font-size: 1.2rem;
        font-weight: normal;
        color: var(--text-color);
      }

      .container-skills {
        display: grid;
        width: 65%;
        margin: auto;
        grid-template-rows: 50% 50%;
        grid-template-columns: 1fr;
        justify-content: center;
        gap: 1rem;
        .skills-line-1 {
          img {
            height: 4rem;
            width: 4rem;
          }
        }
        .skills-line-2 {
          img {
            height: 4rem;
            width: 4rem;
          }
        }
      }
    }
  }
`;
