import React from "react";
import styled from "styled-components";

const Container = styled.a`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  display: block;
`;

const Image = styled.img`
  margin-bottom: 0.1rem;
`;

const Price = styled.div`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Title = styled.a`
  font-weight: 100;
`;

const Rating = styled.div``;

const Reviews = styled.a`
  text-decoration: none;
  color: #383838;
  font-weight: 200;
`;

export default props => (
  <Container>
    <Image src={props.image} alt={props.title} />
    <Description>
      <Price>{props.price}$</Price>
      <Title>{props.title}</Title>
    </Description>
    <Rating stars={props.rating} />
    <Reviews>{props.reviewsCount} reviews</Reviews>
  </Container>
);
