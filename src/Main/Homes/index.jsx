import React from "react";
import { Col } from "react-flexbox-grid";
import Section from "../Section";

import private3BedrImage from "../../assets/images/private3Bedr.png";
import salentinaImage from "../../assets/images/salentina.png";
import dreamHouseImage from "../../assets/images/dreamHouse.png";

import Home from "./Home";

export default () => (
  <Section title="Homes" seeAll>
    <Col xs={8} sm={8} md={5} lg={4}>
      <Home
        title="La Salentina, see, nature & relax"
        image={salentinaImage}
        price={82}
        houseType="Entire house"
        bedsCount={9}
        reviewsCount={97}
        rating={5}
        hostType="Superhost"
      />
    </Col>
    <Col xs={8} sm={8} md={5} lg={4}>
      <Home
        title="Your private 3 bedr. riad and exclusive"
        image={private3BedrImage}
        price={82}
        houseType="Entire house"
        bedsCount={5}
        reviewsCount={161}
        rating={5}
        hostType="Superhost"
      />
    </Col>
    <Col xs={8} sm={8} md={5} lg={4}>
      <Home
        title="Dreamy Tropical Tree House"
        image={dreamHouseImage}
        price={69}
        houseType="Entire treehouse"
        bedsCount={1}
        reviewsCount={364}
        rating={5}
        hostType="Superhost"
      />
    </Col>
  </Section>
);
