import React from "react";
import { Col } from "react-flexbox-grid";
import Section from "../Section";

import forestImage from "../../assets/images/forest.png";
import whaleImage from "../../assets/images/whale.png";
import mountainsImage from "../../assets/images/mountains.png";
import salsaImage from "../../assets/images/dance.png";

import Experience from "./Experience";

export default () => (
  <Section title="Experiences" seeAll>
    <Col xs={6} sm={6} md={4} lg={3}>
      <Experience
        title="Forest Therapy"
        image={forestImage}
        price={29}
        reviewsCount={44}
        rating={5}
      />
    </Col>
    <Col xs={6} sm={6} md={4} lg={3}>
      <Experience
        title="Whale watching"
        image={whaleImage}
        price={69}
        reviewsCount={46}
        rating={5}
      />
    </Col>
    <Col xs={6} sm={6} md={4} lg={3}>
      <Experience
        title="Table Mountain Summit, Cable Car Down"
        image={mountainsImage}
        price={69}
        reviewsCount={44}
        rating={5}
      />
    </Col>
    <Col xs={6} sm={6} md={4} lg={3}>
      <Experience
        title="Salsa Night"
        image={salsaImage}
        price={50}
        reviewsCount={44}
        rating={5}
      />
    </Col>
  </Section>
);
