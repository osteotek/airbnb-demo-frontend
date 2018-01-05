import React from "react";
import { Col } from "react-flexbox-grid";
import Section from "../Section";

import chumleyImage from "../../assets/images/chumley.png";
import hanjanImage from "../../assets/images/hanjan.png";
import primeMeatsImage from "../../assets/images/primeMeats.png";
import seapriceImage from "../../assets/images/seaprice.png";

import PopularReservation from "./PopularReservation";

export default () => (
  <Section title="Popular Reservations around the world" seeAll>
    <Col xs={6} sm={6} md={4} lg={3}>
      <PopularReservation
        title="Chumley's"
        image={chumleyImage}
        description="SPEAKEASY"
        price={60}
      />
    </Col>
    <Col xs={6} sm={6} md={4} lg={3}>
      <PopularReservation
        title="Hanjan"
        image={hanjanImage}
        description="KOREAN GASTROPUB"
        price={50}
      />
    </Col>
    <Col xs={6} sm={6} md={4} lg={3}>
      <PopularReservation
        title="Prime Meats"
        image={primeMeatsImage}
        description="GERMAN AMERICAN"
        price={55}
      />
    </Col>
    <Col xs={6} sm={6} md={4} lg={3}>
      <PopularReservation
        title="Seaprice"
        image={seapriceImage}
        description="FINE SEAFOOD"
        price={70}
      />
    </Col>
  </Section>
);
