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
import BankDetailsComponent from "../FieldsComponents/BankDetails";
import PersonalDetailsComponent from "../FieldsComponents/PersonalDetails";
import AddressDetailsComponent from "../FieldsComponents/AddressDetails";
import DocumentDetailsComponent from "../FieldsComponents/DocumentDetails";
import LegalComplianceDetailsComponent from "../FieldsComponents/LegalComplianceDetails";

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
    .required("Email is required")
    .email("Invalid Email Address"),
  aadhaar_number: Yup.string().required("Aadhaar Number is required"),
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
  other_document: Yup.mixed()
    .nullable() // Allows null or empty values
    .test(
      "fileSize",
      "File size is too large",
      (value) => !value || (value && value.size <= 5 * 1024 * 1024)
    ) // Skip validation if value is null, otherwise check file size
    .test(
      "fileType",
      "Unsupported file format",
      (value) =>
        !value || (value && ["image/jpeg", "image/png"].includes(value.type))
    ), // Skip validation if value is null, otherwise check file type

  bank_account_number: Yup.string()
    .required("Bank Account Number is required")
    .matches(/^[0-9]{9,18}$/, "Invalid Bank Account Number"),
  ifsc_code: Yup.string()
    .required("IFSC Code is required")
    .matches(/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC Code"),
  bank_name: Yup.string().required("Bank Name is required"),
  bank_branch: Yup.string(),
  upi_id: Yup.string(),

  registration_number: Yup.string(),
  kcc_number: Yup.string(),
  gst_number: Yup.string(),
  fpo_membership: Yup.boolean(), // Optional checkbox
  fpo_details: Yup.string(),
});

const AgriMemberRegistrationForm = () => {
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
        other_document: values.other_document,
      },

      // Bank Details
      bank_details: {
        bank_account_number: values.bank_account_number,
        bank_name: values.bank_name,
        bank_branch: values.bank_branch,
        ifsc_code: values.ifsc_code,
        upi_id: values.upi_id, // Assuming "upiId" is the field name for UPI ID
      },

      // Legal Compliance Details
      // legal_compliance: {
      //   registration_number: values.registration_number,
      //   kcc_number: values.kcc_number,
      //   gst_number: values.gst_number,
      //   fpo_membership: values.fpo_membership,
      //   fpo_details: values.fpo_details,
      // },
    };
    console.log("Structured data I'm creating ==> ", structuredData);

    // Handle form submission, such as sending the data to an API
    // resetForm(); // Reset form after submission
  };

  return (
    <Container maxWidth="md">
      <Box mt={5} mb={5}>
        <Typography variant="h4" align="center" gutterBottom>
          Agri Member's Registration Form
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
          other_document: null,
          registration_number: "",
          kcc_number: "",
          gst_number: "",
          fpo_membership: false,
          fpo_details: "",
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

            {/* Upload the Document Details Section */}
            <DocumentDetailsComponent />

            {/* This is Bank Details Section */}
            <BankDetailsComponent />

            {/* Legal Compliance Details Section */}
            {/* <LegalComplianceDetailsComponent /> */}

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

export default AgriMemberRegistrationForm;
