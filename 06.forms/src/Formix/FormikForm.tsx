import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { Formik } from 'formik';

interface FormValues {
    example: string;
    exampleRequired: string;
    isManager: boolean;
    selectGender: string;
}

export default function FormikForm() {
    const initialValues: FormValues = { example: '', exampleRequired: '', isManager: false, selectGender: '' };

    return (
        <Formik
            initialValues={initialValues}
            validate={values => { 
                const errors: any = {};
                if(!values.exampleRequired) {
                    errors.exampleRequired = "Required";
                }
                if(!values.selectGender) {
                    errors.selectGender = "Required";
                }

                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
            }}
        >
            {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant='h4' align='center'>Formix Form</Typography>
                    </Grid>
                    <Grid item xs={3}>&nbsp;</Grid>
                    <Grid item xs={6}>
                        <Paper style={{ padding: 20, backgroundColor: '#F0F0F0' }}>
                            <form onSubmit={handleSubmit}>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2'>Example:</Typography>
                                    <input name="example" onChange={handleChange} 
                                        onBlur={handleBlur} value={values.example}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2'>Example (Req):</Typography>
                                    <input name="exampleRequired" onChange={handleChange} 
                                        onBlur={handleBlur} value={values.exampleRequired}/>
                                    { errors.exampleRequired && touched.exampleRequired && errors.exampleRequired }
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2'>Manager:</Typography>
                                    <input type="checkbox" name="isManager" onChange={handleChange} 
                                        onBlur={handleBlur} checked={values.isManager}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2'>Select (Req):</Typography>
                                    <select name="selectGender" onChange={handleChange} 
                                            onBlur={handleBlur} value={values.selectGender}>
                                        <option value="">--- Select a Gender ---</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                    </select>
                                    { errors.selectGender && touched.selectGender && errors.selectGender }
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <input type="submit" disabled={isSubmitting} />
                                </Grid>
                            </form>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>&nbsp;</Grid>
                </Grid>
            )}
        </Formik>
    )
}
