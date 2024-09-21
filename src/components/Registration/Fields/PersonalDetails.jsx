import React from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';
import { TextField, Grid, Box, Typography } from '@mui/material';

const PersonalDetailsComponent = () => {
  const { touched, errors } = useFormikContext(); 

  return (
    <Box mb={3}>
    <Typography variant="h6" gutterBottom>
      Personal Information
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} sm={4}>
        <Field name="full_name" type="hidden" />
        <Field
          name="firstName"
          as={TextField}
          label="First Name"
          fullWidth
          error={touched.firstName && Boolean(errors.firstName)}
          helperText={<ErrorMessage name="firstName" />}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Field
          name="middleName"
          as={TextField}
          label="Middle Name"
          fullWidth
          error={touched.middleName && Boolean(errors.middleName)}
          helperText={<ErrorMessage name="middleName" />}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Field
          name="lastName"
          as={TextField}
          label="Last Name"
          fullWidth
          error={touched.lastName && Boolean(errors.lastName)}
          helperText={<ErrorMessage name="lastName" />}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Field
          name="fathers_or_husbands_name"
          as={TextField}
          label="Father / Husband FullName"
          fullWidth
          error={
            touched.fathers_or_husbands_name &&
            Boolean(errors.fathers_or_husbands_name)
          }
          helperText={
            <ErrorMessage name="fathers_or_husbands_name" />
          }
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <Field
          name="email"
          as={TextField}
          label="Email"
          fullWidth
          error={touched.email && Boolean(errors.email)}
          helperText={<ErrorMessage name="email" />}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Field
          name="mobile_number"
          as={TextField}
          label="Mobile Number"
          fullWidth
          error={
            touched.mobile_number && Boolean(errors.mobile_number)
          }
          helperText={<ErrorMessage name="mobile_number" />}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Field
          name="date_of_birth"
          as={TextField}
          type="date"
          label="Date of Birth"
          fullWidth
          InputLabelProps={{ shrink: true }} // Ensures the label doesn't overlap with the date picker
          error={
            touched.date_of_birth && Boolean(errors.date_of_birth)
          }
          helperText={<ErrorMessage name="date_of_birth" />}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Field
          as="select"
          name="gender"
          label="Gender"
          // onChange={(e) => {
          //   setFieldValue("gender", e.target.value); // Set the value in Formik's state
          //   console.log("Gender selected:", e.target.value); // Display in console immediately
          // }}
          style={{
            width: "100%",
            padding: "10px",
            height: "55px",
            borderRadius: "4px",
            borderColor:
              touched.gender && errors.gender ? "red" : "#ccc", // Use border color for error indication
          }}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </Field>
        <ErrorMessage
          name="gender"
          component="div"
          style={{ color: "red" }} // Error message style
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Field
          name="aadhaar_number"
          as={TextField}
          label="Aadhar Number"
          fullWidth
          error={
            touched.aadhaar_number && Boolean(errors.aadhaar_number)
          }
          helperText={<ErrorMessage name="aadhaar_number" />}
        />
      </Grid>
    </Grid>
  </Box>
  );
};

export default PersonalDetailsComponent;
