import styled from "styled-components";
import Card from "./Card";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";

const Projects = ({ texts }) => {
  return (
    <Container>
      <section className="text-main-projects">
        <h1>{texts.myProjectsTitle}</h1>
      </section>
      <section className="cards-projects">
        <Card
          img={project1}
          texts={texts}
          title={texts.titleProject1}
          description={texts.descriptionProject1}
        />
        <Card
          img={project2}
          texts={texts}
          title={texts.titleProject2}
          description={texts.descriptionProject2}
        />
        <Card
          img={project3}
          texts={texts}
          title={texts.titleProject3}
          description={texts.descriptionProject3}
        />
        <Card
          img={project1}
          texts={texts}
          title={texts.titleProject4}
          description={texts.descriptionProject4}
        />
      </section>
    </Container>
  );
};

export default Projects;

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 90%;
  width: 95%;
  height: 100%;
  margin: auto;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
  animation: showing 0.5s ease-in-out;

  .text-main-projects {
    justify-content: center;
    align-items: center;
    color: var(--text-color);
  }
  .cards-projects {
    display: grid;
    grid-template-rows: repeat(4, 15rem);
    gap: 1rem;
    width: 100%;
    height: 95%;
    margin: auto;
    overflow: auto;
    padding-right: 0.5rem;
  }

  @media screen and (min-width: 590px) {
    .cards-projects {
      display: grid;
      gap: 2rem;
      width: 100%;
      height: 100%;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      padding-right: 0.5rem;
      overflow: unset;
    }
  }

  @media screen and (min-width: 720px) {
    width: 70%;
    height: 100%;
    margin: auto;
    grid-template-rows: 10% 90%;
    .cards-projects {
      display: grid;
      gap: 2rem;
      width: 100%;
      height: 100%;
      grid-template-columns: repeat(2, 1fr);
      grid-auto-rows: auto;
      padding-right: 0.5rem;
      overflow: unset;

      .card {
        width: 100%;
        height: 100%;
        border-radius: 0.5rem;
      }
    }
  }
`;
