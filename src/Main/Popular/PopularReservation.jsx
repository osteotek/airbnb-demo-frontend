import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  margin-bottom: 0.1rem;
`;

const Description = styled.span`
  font-weight: bold;
  font-size: 0.625rem;
`;

const Title = styled.a`
  font-weight: bold;
  font-size: 1.125rem;
`;

const Price = styled.span`
  font-weight: 100;
`;

export default props => (
  <Container>
    <Image src={props.image} alt={props.title} />
    <Description>{props.description}</Description>
    <Title>{props.title}</Title>
    <Price>About ${props.price} per person</Price>
  </Container>
);
