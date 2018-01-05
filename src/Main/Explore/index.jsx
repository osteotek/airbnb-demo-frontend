import React from "react";
import { Col } from "react-flexbox-grid";
import Section from "../Section";

import bedImage from "../../assets/images/bed.png";
import experiencesImage from "../../assets/images/ship.png";
import restaurantsImage from "../../assets/images/restaurant.png";

import Explore from "./Explore";

export default () => (
  <Section title="Explore Airbnb">
    <Col xs={6} sm={6} md={5} lg={4}>
      <Explore title="Homes" image={bedImage} />
    </Col>
    <Col xs={6} sm={6} md={5} lg={4}>
      <Explore title="Experiences" image={experiencesImage} />
    </Col>
    <Col xs={6} sm={6} md={5} lg={4}>
      <Explore title="Restaurants" image={restaurantsImage} />
    </Col>
  </Section>
);
