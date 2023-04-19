import { Grid } from "@mui/material";
import React, { Component } from "react";

export default class AppFooter extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3">
        <Grid>
          <Grid xs={12}>&copy;2019&nbsp;-&nbsp;iCubed srl</Grid>
        </Grid>
      </footer>
    );
  }
}
