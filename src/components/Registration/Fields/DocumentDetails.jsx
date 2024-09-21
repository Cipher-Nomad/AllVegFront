import React from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';
import { TextField, Grid, Box, Typography } from '@mui/material';

const DocumentDetailsComponent = () => {
  const { setFieldValue, errors, touched } = useFormikContext(); 

  return (
    <Box mb={3}>
    <Typography variant="h6" gutterBottom>
      Document Information
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={9} sm={4}>
        <TextField
          id="identity_document"
          label="Identity Document"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          type="file"
          onChange={(event) =>
            setFieldValue(
              "identity_document",
              event.currentTarget.files[0]
            )
          }
          error={
            touched.identity_document &&
            Boolean(errors.identity_document)
          }
          accept="image/jpeg, image/png"
        />
        <ErrorMessage
          name="identity_document"
          component="div"
          style={{ color: "red" }}
        />
      </Grid>

      <Grid item xs={12} sm={4}>
        <TextField
          id="address_document"
          label="Address Document"
          type="file"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) =>
            setFieldValue(
              "address_document",
              event.currentTarget.files[0]
            )
          }
          error={
            touched.identity_document &&
            Boolean(errors.identity_document)
          }
          accept="image/jpeg, image/png"
        />
        <ErrorMessage
          name="address_document"
          component="div"
          style={{ color: "red" }}
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <TextField
          id="other_document"
          label="Other Document"
          type="file"
          fullWidth
          InputLabelProps={{
            shrink: true,
          }}
          onChange={(event) =>
            setFieldValue(
              "other_document",
              event.currentTarget.files[0]
            )
          }
          accept="image/jpeg, image/png"
        />
      </Grid>
    </Grid>
  </Box>
  );
};

export default DocumentDetailsComponent;
