import React, { Component } from 'react'
import AppStyles from './styles';
import { withStyles } from '@material-ui/styles';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SaveAltIcon from '@material-ui/icons/SaveAlt';
import { Grid, Paper, Button, Typography } from '@material-ui/core';


class UncontrolledForm extends Component<any, any> {
    fileInputTag: any;

    constructor(props: any) {
        super(props);
        
        this.fileInputTag = React.createRef();
    }

    handleSubmit = (event: any) => {
        event.preventDefault();
        alert(`è stato selezionato il file: ${this.fileInputTag.current.files[0].name}`);
    }

  render() {
    const { classes } = this.props

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant='h4' align='center'>Uncontroller Form</Typography>
            </Grid>
            <Grid item xs={3}>&nbsp;</Grid>
            <Grid item xs={6}>
                <Paper className={classes.root}>
                <form onSubmit={this.handleSubmit}>
                    <Grid item xs={12}>
                        <Typography variant='subtitle2'>Scegli un file:</Typography>
                        {/* <input type="file" ref={this.fileInputTag}/> */}
                        <Button
                            variant="contained"
                            component="label"
                            startIcon={<AttachFileIcon />}
                            >
                            Upload File
                            <input
                                type="file"
                                style={{ display: "none" }}
                                ref={this.fileInputTag}
                            />
                        </Button>
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

export default withStyles(AppStyles)(UncontrolledForm)