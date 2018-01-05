import React from "react";
import { Grid } from "react-flexbox-grid";

import Explore from "./Explore";
import Experiences from "./Experiences";
import Homes from "./Homes";
import Popular from "./Popular";
import Featured from "./Featured";

export default () => (
  <Grid>
    <Explore />
    <Experiences />
    <Homes />
    <Popular />
    <Featured />
  </Grid>
);
