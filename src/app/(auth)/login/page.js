"use client";
import { Button, TextField, Link, Container, Box, Typography } from "@/common";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Divider } from "@mui/material";

const validationSchema = Yup.object({
  phone: Yup.string().required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const formik = useFormik({
    initialValues: {
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
            Account Login
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
                href={"/forget"}
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
              Login
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
              {`Don't have an account?`}
            </Typography>
            <Divider
              sx={{
                flexGrow: 1,
              }}
            />
          </Box>

          <Link
            href={"/register"}
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
              Create an account
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
