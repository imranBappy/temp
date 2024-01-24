"use client";
import { Button, TextField, Link, Container, Box, Typography } from "@/common";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Divider } from "@mui/material";

const validationSchema = Yup.object({
  phone: Yup.string().required("Required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
      phone: "",
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
            Forgot Your Password?
          </Typography>
          <form onSubmit={formik.handleSubmit}>
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

            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                width: "100%",
                mt: -1,
                mb: 1,
              }}
            >
              <Link
                href={"/"}
                style={{
                  textDecoration: "none",
                }}
              >
                <Typography variant="body2" color="primary">
                  Forgot Password?
                </Typography>
              </Link>
            </Box>
            <Button variant="contained" fullWidth={true} type="submit">
              Continue
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
