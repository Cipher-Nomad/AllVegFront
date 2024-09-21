import React from "react";
import { useFormikContext, Field, ErrorMessage } from "formik";
import {
  TextField,
  Grid,
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
} from "@mui/material";

const LegalComplianceDetailsComponent = () => {
  const { touched, errors, values } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>
        Legal Compliance Details
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Field
            name="registration_number"
            as={TextField}
            label="Registration Number"
            fullWidth
            error={
              touched.registration_number && Boolean(errors.registration_number)
            }
            helperText={<ErrorMessage name="registration_number" />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            name="kcc_number"
            as={TextField}
            label="KCC Number"
            fullWidth
            error={touched.kcc_number && Boolean(errors.kcc_number)}
            helperText={<ErrorMessage name="kcc_number" />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            name="gst_number"
            as={TextField}
            label="GST Number"
            fullWidth
            error={touched.gst_number && Boolean(errors.gst_number)}
            helperText={<ErrorMessage name="gst_number" />}
          />
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={3}>
          <FormControlLabel
            control={
              <Field
                as={Checkbox}
                name="fpo_membership"
                type="checkbox"
                checked={values.fpo_membership}
              />
            }
            label="FPO Membership"
          />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Field
            name="fpo_details"
            as={TextField}
            label="FPO Details"
            fullWidth
            error={touched.fpo_details && Boolean(errors.fpo_details)}
            helperText={<ErrorMessage name="fpo_details" />}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default LegalComplianceDetailsComponent;
