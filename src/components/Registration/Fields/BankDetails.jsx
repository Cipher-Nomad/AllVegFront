import React from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';
import { TextField, Grid, Box, Typography } from '@mui/material';

const BankDetailsComponent = () => {
  const { touched, errors } = useFormikContext(); 

  return (
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>
        Bank Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Field
            name="bank_account_number"
            as={TextField}
            label="Bank Account Number"
            fullWidth
            error={touched.bank_account_number && Boolean(errors.bank_account_number)}
            helperText={<ErrorMessage name="bank_account_number" />}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            name="upi_id"
            as={TextField}
            label="UPI ID"
            fullWidth
            error={touched.upi_id && Boolean(errors.upi_id)}
            helperText={<ErrorMessage name="upi_id" />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            name="bank_name"
            as={TextField}
            label="Bank Name"
            fullWidth
            error={touched.bank_name && Boolean(errors.bank_name)}
            helperText={<ErrorMessage name="bank_name" />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            name="ifsc_code"
            as={TextField}
            label="IFSC Code"
            fullWidth
            error={touched.ifsc_code && Boolean(errors.ifsc_code)}
            helperText={<ErrorMessage name="ifsc_code" />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            name="bank_branch"
            as={TextField}
            label="Branch Name"
            fullWidth
            error={touched.bank_branch && Boolean(errors.bank_branch)}
            helperText={<ErrorMessage name="bank_branch" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BankDetailsComponent;
