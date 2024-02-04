"use client";

import { DataGrid } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Box } from "@mui/material";
import { Container } from "@/common";
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "brand", headerName: "Brand", width: 130 },
  { field: "model", headerName: "Model", width: 130 },
  { field: "price", headerName: "Price", type: "number", width: 90 },
  { field: "status", headerName: "Status", width: 120 },
];
const generateLaptopData = () => {
  const data = [];

  for (let i = 1; i <= 20; i++) {
    data.push({
      id: i,
      brand: `Brand ${i}`,
      model: `Model ${i}`,
      price: Math.floor(Math.random() * 1000) + 500, // Example random price between 500 and 1500
      status: i % 2 === 0 ? "In Stock" : "Out of Stock", // Example alternating status
    });
  }

  return data;
};
const MyOrder = () => {
  const { data } = useDemoData({
    dataSet: "Commodity",
    rowLength: 20,
    maxColumns: 5,
  });
  const rows = generateLaptopData();
  console.log(data);
  return (
    <Box my={8}>
      <Container>
        <Box sx={{ height: 800, width: "100%" }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} />
        </Box>
      </Container>
    </Box>
  );
};

export default MyOrder;
