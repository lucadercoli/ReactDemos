import React, { Component, ChangeEvent } from "react";
import SimpleReactValidator from 'simple-react-validator/dist/simple-react-validator.min.js';
import moment from 'moment'
import AppStyles from './styles';
import { withStyles } from "@material-ui/styles";
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import { Typography, Paper, Grid, TextField, InputAdornment, Button, MenuItem, Select } from "@material-ui/core";

class SimpleForm extends Component<any, any> {
    validator: any;

    constructor(props: any) {
        super(props);

        this.state ={
            firstName: '',
            lastName: '',
            role: 'na',
            date: moment().format("YYYY-MM-DD")
        };

        this.validator = new SimpleReactValidator({
            className: 'errorMessage',
            messages: {
                required: 'The :attribute field is mandatory.',
                alpha: 'Please use only alphabetic characters.'
            }
        });
    }

    handleSubmit = (event: any) => {
        if(this.validator.allValid()) {
            alert('Form Data: ' + JSON.stringify(this.state));
        } else {
            this.validator.showMessages();
            this.forceUpdate();
        }
        
        event.preventDefault();
    }

    handleChange = (event: any) => {
        const target = event.target;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    render() {
        const { classes } = this.props
        
        return (
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Typography variant='h4' align='center'>SimpleValidation Form</Typography>
                </Grid>
                <Grid item xs={3}>&nbsp;</Grid>
                <Grid item xs={6}>
                    <Paper className={classes.root}>
                    <form onSubmit={this.handleSubmit}>
                        <Grid item xs={12}>
                            <TextField name='firstName' label='First Name' value={this.state.firstName} 
                                onChange={this.handleChange} margin='normal'
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position='start'>
                                        <PersonOutlineIcon />
                                      </InputAdornment>
                                     )
                                    }} />
                            {this.validator.message('FirstName', this.state.firstName, 'required|alpha')}
                        </Grid>
                        <Grid item xs={12}>&nbsp;</Grid>
                        <Grid item xs={12}>
                            <TextField name='lastName' label='Last Name' value={this.state.lastName} 
                                onChange={this.handleChange} margin='normal'
                                InputProps={{
                                    startAdornment: (
                                      <InputAdornment position='start'>
                                        <PersonOutlineIcon />
                                      </InputAdornment>
                                     )
                                    }} />
                        </Grid>
                        <Grid item xs={12}>&nbsp;</Grid>
                        <Grid item xs={12}>
                            <Select
                                labelId="demo-simple-select-label"
                                name="role"
                                value={this.state.role}
                                onChange={this.handleChange}>
                                    <MenuItem value={'na'}>Select a Role</MenuItem>
                                    <MenuItem value={'admin'}>Administrator</MenuItem>
                                    <MenuItem value={'user'}>Regular User</MenuItem>
                                    <MenuItem value={'guest'}>Guest User</MenuItem>
                            </Select>
                            {this.validator.message('Role', this.state.role, 'not_in:na')}
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
            </Grid>
        );
    }
}

export default withStyles(AppStyles)(SimpleForm)