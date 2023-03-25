import styled from "styled-components";
import {
  BsBookHalf,
  BsFillHouseDoorFill,
  BsFillNutFill,
  BsFillPersonFill,
} from "react-icons/bs";

const NavBar = ({ language }) => {
  return (
    <Container>
      <nav className="nav-bar">
        <ul className="nav-options">
          <li className="home btn-option">
            <span>{<BsFillHouseDoorFill />}</span>
            <p>{language.optionsNav[0]}</p>
          </li>
          <li className="about-me btn-option">
            <span>{<BsFillPersonFill />}</span>
            <p>{language.optionsNav[1]}</p>
          </li>
          <li className="proyects btn-option">
            <span>{<BsBookHalf />}</span>
            <p>{language.optionsNav[2]}</p>
          </li>
          <li className="btn-settings-container">
            <button className="btn-settings">{<BsFillNutFill />}</button>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default NavBar;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 10%;
  bottom: 0;

  .nav-bar {
    height: 100%;
    background: var(--background-second);
  }

  .nav-options {
    font-size: 1.5rem;
    padding: 0rem 1rem;
    display: flex;
    height: 100%;
    list-style: none;
    align-items: center;
    justify-content: space-around;
    grid-template-rows: 1fr;
    color: var(--text-color);

    .btn-option {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      cursor: pointer;
      transition: all 0.5s;

      p {
        display: none;
      }
      span {
        position: relative;
        top: 0.1rem;
      }
    }
    .btn-option:hover {
      color: var(--second-color);
    }

    .btn-settings-container {
      display: flex;
      .btn-settings {
        position: relative;
        top: -0.4rem;
        background: transparent;
        color: var(--text-color);
        border: none;
        outline: none;
        width: 1rem;
        height: 1rem;
        font-size: 1.5rem;
        transition: all ease-in-out 0.5s;
        cursor: pointer;
      }

      .btn-settings:hover {
        color: var(--second-color);
      }
    }
  }

  @media screen and (min-width: 720px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .nav-bar {
      height: 60%;
      width: 60%;
      background: var(--background-second);
      border-radius: 1.5rem;
      .nav-options {
        font-size: 1.1rem;

        .btn-option {
          p {
            display: inline-block;
          }
        }
      }
    }
  }

  @media screen and (min-width: 1020px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .nav-bar {
      height: 60%;
      width: 40%;
      background: var(--background-second);
      border-radius: 1.5rem;
    }
  }
`;
