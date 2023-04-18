import React, { Component } from 'react'
import moment from 'moment'
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AppStyles from './styles';
import { withStyles } from '@material-ui/styles';
import { Grid, Paper, Button, Typography, TextField, InputAdornment, InputLabel, Select, MenuItem } from '@material-ui/core';

class ValidateForm extends Component<any, any> {
    constructor(props: any) {
        super(props);

        this.state = { 
            name: '', 
            role: 'na', 
            date: moment().format("YYYY-MM-DD") 
        };
    }

    handleSubmit = (event: any) => {
        alert('Submitted: on ' + this.state.date + " " +
            this.state.name + ' is a ' + this.state.role);
        event.preventDefault();
    }

    /* handleChange(event: any) {
        this.setState({ value: event.target.value });
    } */

    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    render() {
        const { classes } = this.props

        return (
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h4' align='center'>Validate Form</Typography>
                </Grid>
                <Grid item xs={3}>&nbsp;</Grid>
                <Grid item xs={6}>
                    <Paper className={classes.root}>
                    <form onSubmit={this.handleSubmit}>
                        <Grid item xs={12}>
                            <TextField name='name' label='Name' value={this.state.name} 
                                onChange={this.handleChange} margin='normal'
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position='start'>
                                        <PersonOutlineIcon />
                                      </InputAdornment>
                                     )
                                    }} required />
                        </Grid>
                        <Grid item xs={12}>&nbsp;</Grid>
                        <Grid item xs={12}>
                            <Select
                                labelId="demo-simple-select-label"
                                name="role"
                                value={this.state.role}
                                onChange={this.handleChange}
                                required>
                                    <MenuItem value={'na'}><em>Select a Role</em></MenuItem>
                                    <MenuItem value={'admin'}>Administrator</MenuItem>
                                    <MenuItem value={'user'}>Regular User</MenuItem>
                                    <MenuItem value={'guest'}>Guest User</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>&nbsp;</Grid>
                        <Grid item xs={12}>
                            <TextField name='date' label='Birth Date' value={this.state.date} 
                                onChange={this.handleChange} margin='normal'
                                type='date' InputProps={{
                                    startAdornment: (
                                      <InputAdornment position='start'>
                                        <CalendarTodayIcon />
                                      </InputAdornment>
                                     )
                                    }} />
                        </Grid>
                        <Grid item xs={12}>&nbsp;</Grid>
                        <Grid item xs={12} className={classes.center}>
                            <Button type='submit' color='primary'
                                variant='outlined' startIcon={<SaveAltIcon />}>Submit</Button>
                        </Grid>
                    </form>
                    </Paper>
                </Grid>
                <Grid item xs={3}>&nbsp;</Grid>
            </Grid>
        )
    }
}

export default withStyles(AppStyles)(ValidateForm)