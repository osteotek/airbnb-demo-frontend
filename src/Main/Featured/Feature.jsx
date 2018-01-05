import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin-bottom: 0.1rem;
`;

const Title = styled.a`
  font-weight: bold;
  font-size: 1.125rem;
`;

export default props => (
  <Container>
    <Image src={props.image} alt={props.title} />
    <Title>{props.title}</Title>
  </Container>
);
