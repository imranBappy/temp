"use client";
import { Container, Box, DataGrid } from "@/common";
const columns = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "date", headerName: "Date", flex: 1 },
  {
    field: "customare",
    headerName: "Customare",
    flex: 1,
    renderCell: (params) => {
      return (
        <strong
          style={{
            padding: "5px 10px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          {params.value}
        </strong>
      );
    },
  },
  {
    field: "type",
    headerName: "Type",
    flex: 1,
    renderCell: (params) => {
      return (
        <strong
          style={{
            width: "100%",
            textAlign: "center",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor: params.value === "Used" ? "#7C8493" : "#7F00FF",
          }}
        >
          {params.value}
        </strong>
      );
    },
  }, // Used/ New/ Refurbished
  { field: "item", headerName: "Item", type: "number", flex: 1 },
  { field: "total", headerName: "Total", type: "number", flex: 1 },

  {
    field: "status",
    headerName: "Status",
    flex: 1,
    renderCell: (params) => {
      return (
        <strong
          style={{
            width: "100%",
            textAlign: "center",
            color: "white",
            padding: "5px 10px",
            borderRadius: "5px",
            backgroundColor: params.value === "Pending" ? "orange" : "green",
          }}
        >
          {params.value}
        </strong>
      );
    },
  },
  {
    field: "action",
    headerName: "Action",
    flex: 1,
    renderCell: (params) => {
      return (
        <strong
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Edit
          </button>
          <button
            style={{
              backgroundColor: "red",
              color: "white",
              padding: "5px 10px",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Delete
          </button>
        </strong>
      );
    },
  },
];
const generateLaptopData = () => {
  const data = [];

  for (let i = 1; i <= 209; i++) {
    data.push({
      id: i,
      date: new Date().toDateString(),
      customare: `Customare ${i}`,
      type: i % 2 === 0 ? "Used" : "New",
      item: `${Math.floor(Math.random() * 100) + 1}`,
      total: Math.floor(Math.random() * 1000) + 500, // Example random price between 500 and 1500
      status: i % 2 === 0 ? "Pending" : "Delivered",
    });
  }

  return data;
};

const MyOrder = () => {
  const rows = generateLaptopData();

  return (
    <Box my={8}>
      <Container maxWidth="lg">
        <Box
          sx={{
            height: 800,
            width: "100%",
          }}
        >
          <DataGrid
            columns={columns}
            pageSize={10}
            rows={rows}
            autoPageSize={true}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default MyOrder;
