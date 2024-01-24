"use client";
import { Button, TextField, Link, Container, Box, Typography } from "@/common";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Divider } from "@mui/material";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phone: Yup.number()
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .required("A phone number is required"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  return (
    <Container maxWidth="xs">
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box mb={20}>
          <Typography variant="h6" my={2}>
            Register Account
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              id="phone"
              name="phone"
              label="Phone Number"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <TextField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={
                formik.touched.confirmPassword &&
                Boolean(formik.errors.confirmPassword)
              }
              helperText={
                formik.touched.confirmPassword && formik.errors.confirmPassword
              }
            />

            <Button variant="contained" fullWidth={true} type="submit">
              Continue
            </Button>
          </form>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              my: 2,
            }}
          >
            <Divider
              sx={{
                flexGrow: 1,
              }}
            />
            <Typography
              variant="body2"
              color="primary"
              sx={{
                mx: 2,
              }}
            >
              Already have an account?
            </Typography>
            <Divider
              sx={{
                flexGrow: 1,
              }}
            />
          </Box>

          <Link
            href={"/login"}
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              variant="outlined"
              fullWidth={true}
              type="submit"
              size="medium"
            >
              Continue
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
