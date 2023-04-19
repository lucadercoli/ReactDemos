import { Grid } from "@mui/material";
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <Grid xs={12}>
        <Grid xs={12}>
          <h1>About the application ...</h1>
        </Grid>
        <Grid xs={12}>
          Powered by <img src="images/logo.jpg" />
        </Grid>
      </Grid>
    );
  }
}
