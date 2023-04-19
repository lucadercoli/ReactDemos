import { Grid } from "@mui/material";
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <Grid xs={12}>
        <Grid xs={12}>
          <Grid xs={3}></Grid>
          <Grid xs={6}>
            <h1>Welcome to the Help Desk System</h1>
          </Grid>
          <Grid xs={3}></Grid>
        </Grid>
        <Grid>
          <Grid xs={12}>
            <Grid xs={3}></Grid>
            <Grid xs={6}>
              <img src="images/welcome.png" />
            </Grid>
            <Grid xs={3}></Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
