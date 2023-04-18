import React, { Component } from 'react'
import moment from 'moment'
import Typography from '@material-ui/core/Typography'
import { TextField, Paper, Button, Grid, Select, MenuItem, withStyles, InputAdornment } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AppStyles from './styles';

class Form extends Component<any, any> {
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

    /* handleChange = (event: any) => {
        this.setState({ value: event.target.value });
    } */

    /* TYPED EVENT OBJECTS - THEY DON'T WORK WITH REACT MATERIAL UI !!!
    /* handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const target = event.target;
        const targetName = target.name;
        const targetValue = target.value;

        //@ts-ignore
        this.setState({ [targetName]: targetValue });
    }

    handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const target = event.target;
        const targetName = target.name;
        const targetValue = target.value;

        //@ts-ignore
        this.setState({ [targetName]: targetValue });
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;
        const targetName = target.name;
        const targetValue = 
            target.type === 'checkbox' ?
            target.checked :
            target.type == 'file' ?
                this.fileRef.current.files[0].name :
                target.value;

        //@ts-ignore
        this.setState({ [targetName] : targetValue });
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        //this.setState({ attachmentName: this.fileRef.current.files[0].name });
        //alert(this.fileRef.current.files[0].name);
        alert('Form Data: ' + JSON.stringify(this.state));
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
                    <Typography variant='h4' align='center'>Regular Form</Typography>
                </Grid>
                <Grid item xs={3}>&nbsp;</Grid>
                <Grid item xs={6}>
                    <form onSubmit={this.handleSubmit}>
                    <Paper className={classes.root}>
                        <Grid item xs={12}>
                            <TextField name='name' label='Name' value={this.state.name} 
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
                            <InputLabel id="demo-simple-select-label">Role</InputLabel>
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
                        </Grid>
                        <Grid item xs={12}>&nbsp;</Grid>
                        <Grid item xs={12} className={classes.center}>
                            <Button type='submit' color='primary'
                                variant='outlined' startIcon={<SaveAltIcon />}>Submit</Button>
                        </Grid>
                    </Paper>
                    </form>
                </Grid>
                <Grid item xs={3}>&nbsp;</Grid>
            </Grid>
        )
    }
}

export default withStyles(AppStyles)(Form)