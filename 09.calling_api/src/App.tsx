import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import { Grid, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Typography variant='h4' align='center'>API Calling</Typography>
          </Grid>
          <Grid item xs={2}>&nbsp;</Grid>
          <Grid item xs={8}>
            <List></List>
          </Grid>
          <Grid item xs={2}>&nbsp;</Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
