import React from 'react'
import { Grid, Paper, Button, Typography } from '@material-ui/core';
import { Formik, Form, Field, ErrorMessage } from 'formik';

interface FormValues {
    example: string;
    exampleRequired: string;
    isManager: boolean;
    selectGender: string;
}

export default function FormixFormTwo() {
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
            {({isSubmitting}) => (
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant='h4' align='center'>Formix Form (con componenti)</Typography>
                    </Grid>
                    <Grid item xs={3}>&nbsp;</Grid>
                    <Grid item xs={6}>
                        <Paper style={{ padding: 20, backgroundColor: '#F0F0F0' }}>
                            <Form>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2'>Example:</Typography>
                                    <Field type="text" name="example" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2'>Example (Req):</Typography>
                                    <Field type="text" name="exampleRequired" />
                                    <ErrorMessage name="exampleRequired" component="div" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2'>Manager:</Typography>
                                    <Field type="checkbox" name="isManager" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant='subtitle2'>Select (Req):</Typography>
                                    <Field as="select" name="selectGender" >
                                        <option value="">--- Select a Gender ---</option>
                                        <option value="M">Male</option>
                                        <option value="F">Female</option>
                                        <option value="O">Other</option>
                                    </Field>
                                    <ErrorMessage name="selectGender" component="div" />
                                </Grid>
                                <Grid item xs={12} style={{ textAlign: "center" }}>
                                    <button type="submit" disabled={isSubmitting}>Submit</button>
                                </Grid>
                            </Form>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>&nbsp;</Grid>
                </Grid>
            )}
        </Formik>
    )
}
