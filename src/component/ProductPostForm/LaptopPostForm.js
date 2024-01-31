"use client";
import {
  Button,
  TextField,
  Link,
  Container,
  Box,
  Typography,
  Grid,
} from "@/common";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Divider } from "@mui/material";
import { useState } from "react";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  brand: Yup.string().required("Brand is required"),
});
const LaptopPostForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "", // required
      brand: "", // required
      model: "",
      ram: "",
      processor: "",
      hdd: "",
      graphics: "",
      price: "",
      description: "",
      negotiable: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  //   photo state
  const [photo, setPhoto] = useState([]);

  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <Box
          sx={{
            boxShadow: "0px 0px 5px 0px #dddddd",
            p: 2,
          }}
        >
          <Typography variant="h6" my={2}>
            Post Ad
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={8}>
                <TextField
                  id="title"
                  name="title"
                  label="Title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
                <TextField
                  id="brand"
                  name="brand"
                  label="Brand"
                  value={formik.values.brand}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.brand && Boolean(formik.errors.brand)}
                  helperText={formik.touched.brand && formik.errors.brand}
                />
                <TextField
                  id="model"
                  name="model"
                  label="Model"
                  type="model"
                  value={formik.values.model}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.model && Boolean(formik.errors.model)}
                  helperText={formik.touched.model && formik.errors.model}
                />
                <TextField
                  id="ram"
                  name="ram"
                  label="Ram"
                  type="ram"
                  value={formik.values.ram}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.ram && Boolean(formik.errors.ram)}
                  helperText={formik.touched.ram && formik.errors.ram}
                />
                <TextField
                  id="processor"
                  name="processor"
                  label="Processor"
                  type="processor"
                  value={formik.values.processor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.processor && Boolean(formik.errors.processor)
                  }
                  helperText={
                    formik.touched.processor && formik.errors.processor
                  }
                />
                <TextField
                  id="hdd"
                  name="hdd"
                  label="HDD"
                  type="hdd"
                  value={formik.values.hdd}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.hdd && Boolean(formik.errors.hdd)}
                  helperText={formik.touched.hdd && formik.errors.hdd}
                />

                <TextField
                  id="processor"
                  name="processor"
                  label="Processor"
                  type="processor"
                  value={formik.values.processor}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.processor && Boolean(formik.errors.processor)
                  }
                  helperText={
                    formik.touched.processor && formik.errors.processor
                  }
                />
                <TextField
                  id="price"
                  name="price"
                  label="Price"
                  type="price"
                  value={formik.values.price}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.price && Boolean(formik.errors.price)}
                  helperText={formik.touched.price && formik.errors.price}
                />
                <TextField
                  id="description"
                  name="description"
                  label="Description"
                  multiline
                  rows={4}
                  type="description"
                  value={formik.values.description}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.description &&
                    Boolean(formik.errors.description)
                  }
                  helperText={
                    formik.touched.description && formik.errors.description
                  }
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" mb={2}>
                  Add up to 5 photos
                </Typography>
                <Box></Box>
              </Grid>
            </Grid>

            <Button variant="contained" fullWidth={true} type="submit">
              POST
            </Button>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default LaptopPostForm;
