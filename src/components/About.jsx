import styled from "styled-components";

const About = () => {
  return (
    <Container>
      <div className="text-main-about"></div>
      <div className="technologies"></div>
    </Container>
  );
};

export default About;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  transition: all 0.5s;
`;
