"use client";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  Grid,
  Autocomplete,
  IconButton,
} from "@/common";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Cancel } from "@mui/icons-material";
import { bangladeshDistricts } from "@/data/location";
import getUpazilas from "@/utils/getUpazilas";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  brand: Yup.string().required("Brand is required"),
  district: Yup.string().required("District is required"),
  city: Yup.string().required("City is required"),
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
      district: null,
      city: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({ values });
    },
  });

  //   photo state
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileError, setFileError] = useState("");
  const fileCountLimit = 5;

  const handleFileSelect = (event) => {
    const files = event.target.files;
    if (files.length + selectedFiles.length > fileCountLimit) {
      // slice the files to fit the limit
      const newFiles = Array.from(files).slice(
        0,
        fileCountLimit - selectedFiles.length
      );
      setSelectedFiles([...selectedFiles, ...newFiles]);
      setFileError("You can only upload 5 photos");
    } else {
      setSelectedFiles([...selectedFiles, ...files]);
    }
  };

  const handleRemoveFile = (index) => {
    const newFiles = [...selectedFiles];
    newFiles.splice(index, 1);
    setSelectedFiles(newFiles);
  };
  return (
    <Box mt={10}>
      <Container maxWidth="lg">
        <Box>
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
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Box display="flex" flexDirection="column" gap={2}>
                    <Box>
                      <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">
                          <Typography variant="h6">Condition</Typography>
                        </FormLabel>
                        <RadioGroup
                          row
                          aria-labelledby="demo-row-radio-buttons-group-label"
                          name="row-radio-buttons-group"
                        >
                          <FormControlLabel
                            value="Used"
                            control={<Radio />}
                            label="Used"
                          />
                          <FormControlLabel
                            value="New"
                            control={<Radio />}
                            label="New"
                          />
                          <FormControlLabel
                            value="disabled"
                            disabled
                            control={<Radio />}
                            label="other"
                          />
                        </RadioGroup>
                      </FormControl>
                    </Box>
                    {/* Location */}
                    <Box>
                      <FormLabel>
                        <Typography sx={{ mb: 2 }} variant="h6">
                          Location
                        </Typography>
                      </FormLabel>
                      <Autocomplete
                        id="district"
                        name="district"
                        label={"District"}
                        options={bangladeshDistricts}
                        onChange={(e, newValue) =>
                          formik.setFieldValue(
                            "district",
                            newValue?.label || null
                          )
                        }
                        error={
                          formik.touched.district &&
                          Boolean(formik.errors.district)
                        }
                        helperText={
                          formik.touched.district && formik.errors.district
                        }
                      />
                      <Autocomplete
                        id="city"
                        name="city"
                        label={"City"}
                        options={getUpazilas(formik.values.district) || []}
                        onChange={(e, newValue) =>
                          formik.setFieldValue("city", newValue?.label || null)
                        }
                        error={
                          formik.touched.city && Boolean(formik.errors.city)
                        }
                        helperText={formik.touched.city && formik.errors.city}
                        disabled={!formik.values.district}
                      />
                    </Box>
                    <Box>
                      <FormLabel>
                        <Typography
                          sx={
                            selectedFiles.length > 0
                              ? { color: "primary.main" }
                              : {}
                          }
                          variant="h6"
                        >
                          Add up to 5 photos
                        </Typography>
                      </FormLabel>
                      <Box>
                        {/* Preview Image */}
                        <Box
                          display="flex"
                          flexWrap="wrap"
                          justifyContent="space-between"
                          mt={2}
                        >
                          {selectedFiles.map((file, index) => (
                            <Box key={index} mb={2} position={"relative"}>
                              <img
                                src={URL.createObjectURL(file)}
                                alt="preview"
                                style={{ width: "100px", height: "100px" }}
                              />
                              <IconButton
                                variant="contained"
                                onClick={() => handleRemoveFile(index)}
                                sx={{
                                  position: "absolute",
                                  top: 0,
                                  right: 0,
                                  padding: 0,
                                  minWidth: 0,
                                  width: "20px",
                                  height: "20px",
                                  p: 1,
                                }}
                              >
                                <Cancel
                                  color="error"
                                  style={{ width: "20px", height: "20px" }}
                                />
                              </IconButton>
                            </Box>
                          ))}
                        </Box>

                        <Box>
                          <input
                            style={{ display: "none" }}
                            type="file"
                            id="file"
                            multiple
                            accept=".jpg, .jpeg, .png"
                            onChange={handleFileSelect}
                            // file limit 5
                          />
                          <label htmlFor="file">
                            <Button
                              variant="contained"
                              component="span"
                              fullWidth={true}
                              sx={{ mt: 1 }}
                            >
                              {`Upload Photos (${selectedFiles.length}/${fileCountLimit})`}
                            </Button>
                          </label>
                          <Typography variant="caption" color="warning.main">
                            {fileError}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Button
                    sx={{ my: 2 }}
                    variant="contained"
                    fullWidth={true}
                    type="submit"
                  >
                    POST
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
};

export default LaptopPostForm;
