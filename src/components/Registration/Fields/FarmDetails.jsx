import React from "react";
import { useFormikContext, Field, ErrorMessage } from "formik";
import { TextField, Grid, Box, Typography } from "@mui/material";

const FarmDetailsComponent = () => {
  const { touched, errors,setFieldValue } = useFormikContext();

  return (
    <Box mb={3}>
      <Typography variant="h6" gutterBottom>
        Farm Information
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Field
            name="farm_location"
            as={TextField}
            label="Farm Location"
            fullWidth
            error={touched.farm_location && Boolean(errors.farm_location)}
            helperText={<ErrorMessage name="farm_location" />}
          />
        </Grid>
        <Grid item xs={9} sm={4}>
          <TextField
            id="land_ownership_proof"
            label="Land Ownership Proof"
            fullWidth
            InputLabelProps={{
              shrink: true,
            }}
            type="file"
            onChange={(event) =>
              setFieldValue(
                "land_ownership_proof",
                event.currentTarget.files[0]
              )
            }
            accept="image/jpeg, image/png"
          />
          <ErrorMessage
            name="land_ownership_proof"
            component="div"
            style={{ color: "red" }}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Field
            name="farm_size"
            as={TextField}
            type="number"
            label="Farm Size"
            fullWidth
            error={touched.farm_size && Boolean(errors.farm_size)}
            helperText={<ErrorMessage name="farm_size" />}
          />
        </Grid>
        <Grid item xs={12} sm={2}>
          <Field
            name="farm_land_unit"
            as="select"
            label="Farm Land Unit"
            style={{
              width: "100%",
              padding: "10px",
              height: "55px",
              borderRadius: "4px",
              borderColor:
                touched.farm_land_unit && errors.farm_land_unit
                  ? "red"
                  : "#ccc", // Use border color for error indication
            }}
          >
            <option value="">Select Unit</option>
            <option value="acres">Acres</option>
            <option value="hectares">Hectares</option>
          </Field>
          <ErrorMessage
            name="farm_land_unit"
            component="div"
            style={{ color: "red" }}
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Field
            as="select"
            name="farming_type"
            label="Farming Type"
            onChange={(e) => {
              setFieldValue("farming_type", e.target.value); // Set the value in Formik's state
              console.log("farming_type selected:", e.target.value); // Display in console immediately
            }}
            style={{
              width: "100%",
              padding: "10px",
              height: "55px",
              borderRadius: "4px",
              borderColor:
                touched.farming_type && errors.farming_type ? "red" : "#ccc", // Use border color for error indication
            }}
          >
            <option value="">Select Farming Type</option>
            <option value="Organic">Organic</option>
            <option value="Conventional">Conventional</option>
            <option value="Mixed">Mixed</option>
          </Field>
          <ErrorMessage
            name="farming_type"
            component="div"
            style={{ color: "red" }} // Error message style
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            name="crops"
            as={TextField}
            label="Crops"
            fullWidth
            error={touched.crops && Boolean(errors.crops)}
            helperText={<ErrorMessage name="crops" />}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            as="select"
            name="irrigation_type"
            label="Irrigation Type"
            onChange={(e) => {
              setFieldValue("irrigation_type", e.target.value); // Set the value in Formik's state
              console.log("irrigation_type selected:", e.target.value); // Display in console immediately
            }}
            style={{
              width: "100%",
              padding: "10px",
              height: "55px",
              borderRadius: "4px",
              borderColor:
                touched.irrigation_type && errors.irrigation_type
                  ? "red"
                  : "#ccc", // Use border color for error indication
            }}
          >
            <option value="">Select Irrigation Type</option>
            <option value="Borewell">Borewell</option>
            <option value="River">River</option>
            <option value="Canal">Canal</option>
            <option value="Rain-fed">Rain-fed</option>
            <option value="Other">Other</option>
          </Field>
          <ErrorMessage
            name="irrigation_type"
            component="div"
            style={{ color: "red" }} // Error message style
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            as="select"
            name="warehouse_available"
            label="Warehouse Available ?"
            onChange={(e) => {
              setFieldValue("warehouse_available", e.target.value);
              console.log("warehouse_available selected:", e.target.value);
            }}
            style={{
              width: "100%",
              padding: "10px",
              height: "55px",
              borderRadius: "4px",
              borderColor:
                touched.warehouse_available && errors.warehouse_available
                  ? "red"
                  : "#ccc",
            }}
          >
            <option value="">Select Warehouse Available</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Field>
          <ErrorMessage
            name="warehouse_available"
            component="div"
            style={{ color: "red" }} // Error message style
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Field
            as="select"
            name="cold_storage_available"
            label="Cold storage Available ?"
            onChange={(e) => {
              setFieldValue("cold_storage_available", e.target.value);
              console.log("cold_storage_available selected:", e.target.value);
            }}
            style={{
              width: "100%",
              padding: "10px",
              height: "55px",
              borderRadius: "4px",
              borderColor:
                touched.cold_storage_available && errors.cold_storage_available
                  ? "red"
                  : "#ccc",
            }}
          >
            <option value="">Select Cold Storage Available</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </Field>
          <ErrorMessage
            name="cold_storage_available"
            component="div"
            style={{ color: "red" }} // Error message style
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default FarmDetailsComponent;
