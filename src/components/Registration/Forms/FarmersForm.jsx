import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import BankDetailsComponent from "../Fields/BankDetails";
import PersonalDetailsComponent from "../Fields/PersonalDetails";
import AddressDetailsComponent from "../Fields/AddressDetails";
import FarmDetailsComponent from "../Fields/FarmDetails";

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  middleName: Yup.string(),
  lastName: Yup.string().required("Last Name is required"),
  fathers_or_husbands_name: Yup.string(),
  date_of_birth: Yup.string().required("Date Of Birth is required"),
  mobile_number: Yup.string()
    .required("Mobile Number is required")
    .matches(/^[0-9]{10}$/, "Invalid Mobile Number"),
  gender: Yup.string()
    .required("Gender is required")
    .oneOf(["male", "female", "other"], "Invalid Gender selection"),
  email: Yup.string()
    .email("Invalid Email Address"),
  aadhaar_number: Yup.string().required("Aadhar Number is required"),
  // .matches(/^[0-9]{12}$/, "Invalid Aadhar Number"),
  residential_address: Yup.string().required("Address is required"),
  village: Yup.string().required("village is required"),
  district: Yup.string().required("district is required"),
  taluk: Yup.string().required("taluk is required"),
  state: Yup.string().required("state is required"),
  identity_document: Yup.mixed()
    .required("ID Proof is required")
    .test(
      "fileSize",
      "File size is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    ) // Limit to 5MB
    .test("fileType", "Unsupported file format", (value) =>
      ["image/jpeg", "image/png"].includes(value.type)
    ),
  address_document: Yup.mixed()
    .required("Address Proof is required")
    .test(
      "fileSize",
      "File size is too large",
      (value) => value && value.size <= 5 * 1024 * 1024
    ) // Limit to 5MB
    .test("fileType", "Unsupported file format", (value) =>
      ["image/jpeg", "image/png"].includes(value.type)
    ),
  bank_account_number: Yup.string()
    .required("Bank Account Number is required")
    .matches(/^[0-9]{9,18}$/, "Invalid Bank Account Number"),
  ifsc_code: Yup.string()
    .required("IFSC Code is required")
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code"),
  bank_name: Yup.string().required("Bank Name is required"),
  bank_branch: Yup.string(),
  upi_id: Yup.string(),
  legal_compliance_document: Yup.mixed()
    .nullable() // Allows null or empty values
    .test(
      "fileSize",
      "File size is too large",
      (value) => !value || (value && value.size <= 5 * 1024 * 1024)
    ) // Skip validation if value is null, otherwise check file size
    .test(
      "fileType",
      "Unsupported file format",
      (value) => !value || (value && ["image/jpeg", "image/png"].includes(value.type))
    ),// Skip validation if value is null, otherwise check file type

  supervisor_agri_member: Yup.string().required(
    "Please select a Supervisor Agri Member"
  ),
  farm_location: Yup.string().required("Farm Location is Required"),
  land_ownership_proof: Yup.mixed()
    .nullable() // Allows null or empty values
    .test(
      "fileSize",
      "File size is too large",
      (value) => !value || (value && value.size <= 5 * 1024 * 1024)
    ) // Skip validation if value is null, otherwise check file size
    .test(
      "fileType",
      "Unsupported file format",
      (value) => !value || (value && ["image/jpeg", "image/png"].includes(value.type))
    ), // Skip validation if value is null, otherwise check file type

  farm_size: Yup.number()
    .required("Farm size is required")
    .positive("Farm size must be a positive number")
    .typeError("Farm size must be a number"),
  farm_land_unit: Yup.string()
    .required("select a unit (acres or hectares)")
    .oneOf(["acres", "hectares"], "Invalid unit selected"),
  farming_type: Yup.string()
    .required("Warehouse is required")
    .oneOf(["Organic", "Conventional", "Mixed"], "Invalid Warehouse selection"),
  crops: Yup.string()
    .required("Crops are required")
    .test(
      "is-valid-crops",
      "Please enter at least one crop, separated by commas",
      (value) => {
        if (value) {
          const cropsArray = value.split(",").map((crop) => crop.trim());
          return (
            cropsArray.length > 0 && cropsArray.every((crop) => crop !== "")
          );
        }
        return false;
      }
    ),
  irrigation_type: Yup.string()
    .required("Irrigation Type is required")
    .oneOf(
      ["Borewell", "River", "Canal", "Rain-fed", "Other"],
      "Invalid Irrigation Type selection"
    ),
  warehouse_available: Yup.string()
    .required("Warehouse is required")
    .oneOf(["true", "false"], "Invalid Warehouse selection"),
  cold_storage_available: Yup.string()
    .required("Cold Storage is required")
    .oneOf(["true", "false"], "Invalid Cold Storage selection"),
});

const memberOptions = [
  { id: "1", name: "John Doe" },
  { id: "2", name: "Jane Smith" },
  { id: "3", name: "Michael Johnson" },
];

const FarmerRegistrationForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("The values I'm getting ==> ", values);

    const structuredData = {
      full_name:
        `${values.firstName} ${values.middleName} ${values.lastName}`.trim(),
      fathers_or_husbands_name: values.fathers_or_husbands_name,
      date_of_birth: values.date_of_birth,
      gender: values.gender,
      aadhaar_number: values.aadhaar_number,
      mobile_number: values.mobile_number,
      email: values.email,
      residential_address: values.residential_address,
      village: values.village,
      taluk: values.taluk,
      district: values.district,
      state: values.state,

      // Documents
      documents: {
        identity_document: values.identity_document,
        address_document: values.address_document,
        legal_compliance_document: values.legal_compliance_document,
      },

      // Bank Details
      bank_details: {
        bank_account_number: values.bank_account_number,
        bank_name: values.bank_name,
        bank_branch: values.bank_branch,
        ifsc_code: values.ifsc_code,
        upi_id: values.upi_id, // Assuming "upiId" is the field name for UPI ID
      },

      // Supervisor
      supervisor_agri_member: values.supervisor_agri_member,

      // Farm Details
      farm_details: {
        farm_location: values.farm_location,
        land_ownership_proof: values.land_ownership_proof,
        farm_size: values.farm_size,
        farming_type: values.farming_type,
        crops: values.crops,
        irrigation_type: values.irrigation_type,
        warehouse_available: values.warehouse_available,
        cold_storage_available: values.cold_storage_available,
      },
    };
    console.log("Structured data I'm creating ==> ", structuredData);

    // Handle form submission, such as sending the data to an API
    // resetForm(); // Reset form after submission
  };

  return (
    <Container maxWidth="md">
      <Box mt={5} mb={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Farmer's Registration
        </Typography>
      </Box>
      <Formik
        initialValues={{
          full_name: "",
          firstName: "",
          middleName: "",
          lastName: "",
          fathers_or_husbands_name: "",
          date_of_birth: "",
          mobile_number: "",
          aadhaar_number: "",
          gender: "",
          email: "",
          residential_address: "",
          village: "",
          district: "",
          taluk: "",
          state: "",
          bank_account_number: "",
          bank_name: "",
          ifsc_code: "",
          upi_id: "",
          bank_branch: "",
          identity_document: null,
          address_document: null,
          bankPassbook: null,
          legal_compliance_document: null,
          supervisor_agri_member: "",
          farm_location: "",
          land_ownership_proof: null,
          farm_size: "",
          farm_land_unit: "",
          farming_type: "",
          crops: "",
          irrigation_type: "",
          warehouse_available: "",
          cold_storage_available: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, errors, touched, values }) => (
          <Form>
            {/* Personal Details Component Section */}
            <PersonalDetailsComponent />

            {/* Address Details Component Section */}
            <AddressDetailsComponent />

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
                    id="legal_compliance_document"
                    label="Legal Compliance Document"
                    type="file"
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event) =>
                      setFieldValue(
                        "legal_compliance_document",
                        event.currentTarget.files[0]
                      )
                    }
                    accept="image/jpeg, image/png"
                  />
                  <ErrorMessage
                    name="legal_compliance_document"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* This is Bank Details Section */}
            <BankDetailsComponent />

            <Box mb={3}>
              <Typography variant="h6" gutterBottom>
                Supervisor Information
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <Field
                    name="supervisor_agri_member"
                    as="select"
                    style={{
                      width: "100%",
                      padding: "10px",
                      height: "55px",
                      borderRadius: "4px",
                      borderColor:
                        touched.supervisor_agri_member &&
                          errors.supervisor_agri_member
                          ? "red"
                          : "#ccc", // Use border color for error indication
                    }}
                  >
                    <option value="">Select Supervisor</option>
                    {memberOptions.map((option) => (
                      <option key={option.id} value={option.id}>
                        {`${option.id} - ${option.name}`}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage
                    name="supervisor_agri_member"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
              </Grid>
            </Box>

            {/* Farm Information Details Section */}
            <FarmDetailsComponent />

            <Box mt={3} display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default FarmerRegistrationForm;
