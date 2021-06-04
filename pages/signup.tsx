import React from "react";
import {
  Box,
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import * as yup from "yup";
import { useFormik } from "formik";

import Link from "../components/Link";
import Copyright from "../components/Copyright";
import Logo from "../components/Logo";

const useStyles = makeStyles({
  flexStyle: {
    display: "flex",
  },
  root: {
    height: "100vh",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  paper: {
    marginTop: "1rem",
    width: "24rem",
    flexDirection: "column",
    padding: "2.6rem",
  },
  textFieldFirstName: {
    marginRight: "0.2rem",
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
  },
  textFieldLastName: {
    marginLeft: "0.2rem",
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
  },
  textfieldFullWidth: {
    marginTop: "0.4rem",
    marginBottom: "0.4rem",
  },
  button: {
    marginTop: "1rem",
  },
  footer: {
    padding: "1rem",
    position: "fixed",
    bottom: 0,
  },
  logo: {
    marginTop: "2rem",
    width: "100%",
    position: "fixed",
    top: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

const validationSchema = yup.object({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: yup
    .string()
    .length(10, "Invalid mobile number")
    .required("Mobile is required"),
});

const SignUp = () => {
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Container className={clsx(classes.flexStyle, classes.root)}>
      <Box className={classes.logo}>
        <Logo width="300px" />
      </Box>
      <Box component={Paper} className={clsx(classes.flexStyle, classes.paper)}>
        <Typography
          variant="h4"
          component="h1"
          style={{ fontWeight: "bold" }}
          gutterBottom
        >
          Signup
        </Typography>
        <Typography variant="body2" component="p" gutterBottom>
          By signing up, you accept our{" "}
          <Link href="#" color="secondary">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" color="secondary">
            Terms of Service
          </Link>
          .
        </Typography>
        <Box my={2}>
          <form onSubmit={formik.handleSubmit}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <TextField
                className={classes.textFieldFirstName}
                color="secondary"
                size="small"
                variant="outlined"
                id="firstName"
                name="firstName"
                label="First Name"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={formik.touched.firstName && formik.errors.firstName}
              />
              <TextField
                className={classes.textFieldLastName}
                color="secondary"
                size="small"
                variant="outlined"
                id="lastName"
                name="lastName"
                label="Last Name"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={formik.touched.lastName && formik.errors.lastName}
              />
            </Box>
            <TextField
              className={classes.textfieldFullWidth}
              color="secondary"
              fullWidth
              size="small"
              variant="outlined"
              id="email"
              name="email"
              label="Email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              className={classes.textfieldFullWidth}
              color="secondary"
              fullWidth
              size="small"
              variant="outlined"
              id="phone"
              name="phone"
              label="Mobile"
              value={formik.values.phone}
              onChange={formik.handleChange}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <Button
              color="secondary"
              variant="contained"
              fullWidth
              type="submit"
              className={classes.button}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Box>
      <Box className={classes.footer}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;
