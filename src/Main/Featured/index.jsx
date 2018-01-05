import React from "react";
import { Col } from "react-flexbox-grid";
import Section from "../Section";

import losAngelesImage from "../../assets/images/losAngeles.png";
import seoulImage from "../../assets/images/seoul.png";
import tokyoImage from "../../assets/images/tokyo.png";
import capeTownImage from "../../assets/images/capeTown.png";
import miamiImage from "../../assets/images/miami.png";
import parisImage from "../../assets/images/paris.png";

import Feature from "./Feature";

export default () => (
  <Section title="Explore Airbnb">
    <Col xs={4} sm={4} md={3} lg={2}>
      <Feature title="Paris" image={parisImage} />
    </Col>
    <Col xs={4} sm={4} md={3} lg={2}>
      <Feature title="Miami" image={miamiImage} />
    </Col>
    <Col xs={4} sm={4} md={3} lg={2}>
      <Feature title="Tokyo" image={tokyoImage} />
    </Col>
    <Col xs={4} sm={4} md={3} lg={2}>
      <Feature title="Cape town" image={capeTownImage} />
    </Col>
    <Col xs={4} sm={4} md={3} lg={2}>
      <Feature title="Seoul" image={seoulImage} />
    </Col>
    <Col xs={4} sm={4} md={3} lg={2}>
      <Feature title="Los Angeles" image={losAngelesImage} />
    </Col>
  </Section>
);
