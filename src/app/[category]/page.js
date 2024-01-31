import { Box, Typography, Container } from "@/common";
import ComputerFilter from "@/component/ComputerFilter/ComputerFilter";

const ProductFilter = () => {
  return (
    <Box mt={10}>
      <Container maxWidth="xl">
        <Box height="100%" width={"100%"}>
          <ComputerFilter />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductFilter;
