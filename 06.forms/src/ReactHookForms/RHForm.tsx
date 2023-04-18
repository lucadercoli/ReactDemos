import React from 'react'
import { useForm } from 'react-hook-form';
import { Grid, Paper, Button, Typography } from '@material-ui/core';

type Inputs = {
    example: string,
    exampleRequired: string,
    selectGender: string,
    isManager: boolean
};

export default function RHForm() {
    const { register, handleSubmit, watch, errors } = useForm<Inputs>();

    const onSubmit = (data: Inputs) => console.log(data);

    console.log(watch("example"));  // watch one of the 

    return (
        <Grid container spacing={4}>
            <Grid item xs={12}>
                <Typography variant='h4' align='center'>React Hook Form</Typography>
            </Grid>
            <Grid item xs={3}>&nbsp;</Grid>
            <Grid item xs={6}>
                <Paper style={{ padding: 20, backgroundColor: '#F0F0F0' }}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2'>Example:</Typography>
                            <input name="example" defaultValue="test" ref={register} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2'>Example (Req):</Typography>
                            <input name="exampleRequired" ref={register({ required: true })} />
                            { errors.exampleRequired && <span>This field is required</span> }
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2'>Manager:</Typography>
                            <input type="checkbox" name="isManager" ref={register} />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='subtitle2'>Select (Req):</Typography>
                            <select name="selectGender" ref={register({ required: true })}>
                                <option value="">--- Select a Gender ---</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                                <option value="O">Other</option>
                            </select>
                            { errors.selectGender && <span>This field is required</span> }
                        </Grid>
                        <Grid item xs={12} style={{ textAlign: "center" }}>
                            <input type="submit" />
                        </Grid>
                    </form>
                </Paper>
            </Grid>
            <Grid item xs={3}>&nbsp;</Grid>
        </Grid>
    )
}
