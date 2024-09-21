import React from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';
import { TextField, Grid, Box, Typography } from '@mui/material';

const AddressDetailsComponent = () => {
  const { touched, errors } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>
        Address Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field
            name="residential_address"
            as={TextField}
            label="Residential Address"
            fullWidth
            error={
              touched.residential_address &&
              Boolean(errors.residential_address)
            }
            helperText={<ErrorMessage name="residential_address" />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="village"
            as={TextField}
            label="Village"
            fullWidth
            error={touched.village && Boolean(errors.village)}
            helperText={<ErrorMessage name="village" />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="taluk"
            as={TextField}
            label="Taluk"
            fullWidth
            error={touched.taluk && Boolean(errors.taluk)}
            helperText={<ErrorMessage name="taluk" />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="district"
            as={TextField}
            label="District"
            fullWidth
            error={touched.district && Boolean(errors.district)}
            helperText={<ErrorMessage name="district" />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="state"
            as={TextField}
            label="State"
            fullWidth
            error={touched.state && Boolean(errors.state)}
            helperText={<ErrorMessage name="state" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddressDetailsComponent;
