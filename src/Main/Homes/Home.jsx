import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Description = styled.div`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Image = styled.img`
  margin-bottom: 0.1rem;
`;

const Price = styled.a`
  margin-right: 0.5rem;
  font-weight: bold;
`;

const Title = styled.a`
  font-weight: bold;
`;

const HouseType = styled.span`
  font-weight: 100;
  margin-right: 0.5rem;
`;

const BedsNumber = styled.span`
  font-weight: 100;
  margin-left: 0.5rem;
`;

const Rating = styled.label``;

const Reviews = styled.a`
  text-decoration: none;
  color: #383838;
  font-weight: 200;
  margin-right: 0.5rem;
`;

const HostType = styled.span`
  font-weight: 100;
  margin-left: 0.5rem;
`;

export default props => (
  <Container>
    <Image src={props.image} alt={props.title} />
    <Description>
      <Price>{props.price}$</Price>
      <Title>{props.title}</Title>
    </Description>
    <Description>
      <HouseType>{props.houseType}</HouseType>
      ·
      <BedsNumber>{`${props.bedsCount} ${
        props.bedsCount > 1 ? "beds" : "bed"
      }`}</BedsNumber>
    </Description>
    <Description>
      <Rating stars={props.rating} />
      <Reviews href="#">{props.reviewsCount}</Reviews>
      ·
      <HostType>{props.hostType}</HostType>
    </Description>
  </Container>
);
