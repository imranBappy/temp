"use client";
import { Box, Button, Container, Grid, TextField, Typography } from "@/common";
import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useContext, useEffect } from "react";
import { AddToCartContext } from "@/wrapper/Wrapper";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
//post-ad

const CheckoutPage = () => {
  const [rows, setCart] = useContext(AddToCartContext);
  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, [setCart]);

  return (
    <Box mt={10}>
      <Container>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} sm={12} md={4}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
                border: "1px solid #dddddd",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 0px #dddddd",
              }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid #dddddd",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Shipping Address
                </Typography>
              </Box>
              <Box>
                <TextField
                  id="name"
                  name="name"
                  label="Full Name"
                  fullWidth
                  autoComplete="given-name"
                  size="small"
                />
                <TextField
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  size="small"
                />
                <TextField
                  id="phone"
                  name="phone"
                  label="Phone"
                  fullWidth
                  size="small"
                />
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  fullWidth
                  size="small"
                />
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <TextField
                    id="city"
                    name="city"
                    label="City"
                    fullWidth
                    size="small"
                  />
                  <TextField
                    id="country"
                    name="country"
                    label="Country"
                    fullWidth
                    size="small"
                  />
                </Box>
                <TextField
                  id="comment"
                  name="comment"
                  label="Comment"
                  fullWidth
                  multiline
                  rows={4}
                  maxRows={4}
                />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={8}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
                border: "1px solid #dddddd",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 0px #dddddd",
              }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid #dddddd",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Payment Method
                </Typography>
              </Box>
              <Box>
                <Typography variant="bodySmall" gutterBottom>
                  Select a payment method
                </Typography>
                <Box>
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        value="cash"
                        control={<Radio />}
                        label=" Cash on Delivery"
                        checked
                      />
                      <FormControlLabel
                        value="Online Payment"
                        control={<Radio />}
                        label=" Online Payment"
                        disabled
                      />
                      <FormControlLabel
                        value="POS on Delivery"
                        control={<Radio />}
                        label="POS on Delivery"
                        disabled
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 3,
                display: "flex",
                flexDirection: "column",
                gap: 2,
                p: 2,
                border: "1px solid #dddddd",
                borderRadius: "5px",
                boxShadow: "0px 0px 5px 0px #dddddd",
              }}
            >
              <Box
                sx={{
                  borderBottom: "1px solid #dddddd",
                }}
              >
                <Typography variant="h6" gutterBottom>
                  Order Overview
                </Typography>
              </Box>
              <Box>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead
                      sx={{
                        backgroundColor: "#dddddd",
                      }}
                    >
                      <TableRow>
                        <TableCell>Product Name </TableCell>
                        <TableCell align="right">Price</TableCell>
                        <TableCell align="right">Total</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.title}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {row.title}
                          </TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                          <TableCell align="right">{row.price}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            mt: 3,
            gap: 2,
          }}
        >
          <Button variant="contained" color="primary">
            Place Order
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default CheckoutPage;
