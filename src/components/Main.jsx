import styled from "styled-components";
import exampleImg from "../assets/example_img.jpg";
import { BsDownload, BsArrowClockwise, BsCheckLg } from "react-icons/bs";

const Main = ({ language }) => {
  return (
    <Container className="section-main">
      <div className="introduction-container">
        <div className="details-container">
          <div className="texts-container">
            <h1 className="main-text">{language.mainText}</h1>
            <p className="welcoming-text">{language.welcomingText}</p>
          </div>
          <div className="picture-container">
            <img src={exampleImg} alt="" />
          </div>
        </div>
        <div className="btn-download-container">
          <a download="" className="download-file">
            Download CV <span className="download"> {<BsDownload />}</span>
            <span className="loading">{<BsArrowClockwise />} </span>
            <span className="ready"> {<BsCheckLg />}</span>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;

  .introduction-container {
    display: grid;
    height: 70%;
    gap: 2rem;
    grid-template-rows: 85% 15%;

    .details-container {
      display: flex;
      flex-direction: column-reverse;
      height: 100%;
      width: 100%;
      justify-content: center;
      align-items: center;

      .texts-container {
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0.5rem;

        .main-text {
          color: var(--first-color);
          font-size: 2.5rem;
        }

        .welcoming-text {
          color: var(--text-color);
        }
      }

      .picture-container {
        width: 15rem;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }

    .btn-download-container {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      .download-file {
        display: flex;
        font-size: 1rem;
        padding: 0.5rem;
        color: var(--text-color);
        background: var(--first-color);
        border: none;
        border-radius: 1rem;
        outline: none;
        cursor: pointer;
        transition: all 0.5s;

        .download {
          display: block;
          font-size: 1rem;
          position: relative;
          margin-left: 0.5rem;
          top: 0.1rem;
        }
        .loading {
          display: none;
          font-size: 1rem;
          position: relative;
          height: 1rem;
          width: 1rem;
          margin-left: 0.5rem;
          top: 0.1rem;
          animation: loading 0.7s ease-in-out infinite;

          @keyframes loading {
            0% {
              transform: rotate(0deg);
            }

            100% {
              transform: rotate(360deg);
            }
          }
        }
        .ready {
          display: none;
          font-size: 1rem;
          position: relative;
          margin-left: 0.5rem;
          top: 0.1rem;
        }
      }

      .download-file:hover {
        background-color: var(--second-color);
      }
    }
  }

  @media screen and (min-width: 720px) {
    .introduction-container {
      height: 40%;
      width: 80%;
      margin-left: 5rem;

      grid-template-rows: 85% 15%;
      .details-container {
        display: flex;
        justify-content: space-between;
        flex-direction: row-reverse;
        .picture-container {
          width: 40%;
          img {
            height: 100%;
            width: 100%;
            object-fit: cover;
          }
        }
      }
      .btn-download-container {
        justify-content: flex-start;
        margin-left: 4rem;
      }
    }
  }
`;
