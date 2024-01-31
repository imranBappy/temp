import dynamic from "next/dynamic";
import { Container, Typography, Box, Button, Image } from "@/common";
import OffterBanner from "../../../assets/images/OfferBanner.webp";
import { Call, ReportSharp, SaveAlt, Share } from "@mui/icons-material";
import ProductCard from "@/component/ProductCard/ProductCard";
import AddToCart from "./AddToCart";
const Slider = dynamic(() => import("./Slider"));

const product = {
  id: 1,
  title: "Toyota Prius S-Safety Plus PEARL 2018",
  price: 500,
  regularPrice: 600,
  save: 100,
  condition: "Used",
  brand: "Toyota",
  images: [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ],
  description: `AMD Ryzen 5 2400G Budget Gaming Desktop PC The AMD Ryzen 5 2400G
            Budget Desktop PC is a low-cost computing system that combines AMD's
            Ryzen engine with Radeon RX Vega 11 Graphics to give respectable
            performance for everyday computer chores, light gaming, and
            multimedia activities. The AMD Ryzen 5 2400G Desktop CPU is at the
            heart of this system, a quad-core CPU with eight threads that
            eliminates the need for a separate graphics card thanks to its
            integrated Radeon RX Vega 11 Graphics. The MSI A520M-A Pro AM4 AMD
            Micro-ATX Motherboard complements the processor by offering
            stability and crucial features like as PCIe 3.0 compatibility and
            USB 3.2 ports. The system is outfitted with Team Elite Plus Red 8GB
            3200MHz DDR4 U-DIMM Desktop RAM, which ensures seamless multitasking
            and efficient data processing. The Western Digital Green SN350 240GB
            M.2 NVMe Gen3 SSD boosts overall system performance by providing
            speedy data access and application and operating system
            responsiveness. The MaxGreen ATX Power Supply provides consistent
            and dependable power to the components, while the MaxGreen 5510-Mesh
            Mini-Tower ARGB M-ATX Gaming Case adds a stylish touch with its
            small form and ARGB lighting. This AMD Ryzen 5 2400G Budget Desktop
            PC finds a mix between price and performance, making it an excellent
            choice for consumers looking for a dependable machine for daily
            computing demands and casual gaming on a budget. For More Details
            Please Visit: AMD Ryzen 5 2400G Desktop Processor with Radeon RX
            Vega 11 Graphics MSI A520M-A Pro AM4 AMD Micro-ATX Motherboard Team
            Elite Plus Red 8GB 3200MHz DDR4 U-DIMM Desktop RAM Western Digital
            Green SN350 240GB M.2 NVMe Gen3 SSD MaxGreen ATX Power Supply
            MaxGreen 5510-Mesh Mini-Tower ARGB M-ATX Gaming Case`,
};

const ProductDetails = () => {
  return (
    <Box mt={15}>
      <Container>
        <Box
          display="flex"
          justifyContent="center"
          gap={4}
          flexDirection={{
            xs: "column",
            sm: "column",
            md: "row",
          }}
        >
          <Box flexBasis={{ xs: "100%", sm: "100%", md: "70%" }}>
            <Box mb={1}>
              <Typography
                variant="h1"
                sx={{
                  fontSize: 22,
                }}
              >
                {product.title}
              </Typography>
              <Typography variant="bodyNormal">
                Posted on 24 Jan 1:25 pm, Rupatali, Barishal
              </Typography>
            </Box>

            {/* <Box>
              <ImageGallery items={images} />
            </Box> */}
            <Slider />
          </Box>
          <Box flexBasis={{ xs: "100%", sm: "100%", md: "30%" }} mt={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                py: 2,
              }}
            >
              <Button
                sx={{
                  color: "#fff",
                  width: "50%",
                  height: "40px",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Share
                <Share />
              </Button>

              <Button
                sx={{
                  color: "#fff",
                  width: "50%",
                  height: "40px",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                Save
                <SaveAlt />
              </Button>
            </Box>

            <Box
              sx={{
                border: "1px solid #E1E1E1",
                borderRadius: 2,
                p: 2,
              }}
            >
              <Typography variant="h3" component={"h3"}>
                {product.price}
              </Typography>
              <Typography variant="bodyNormal">
                <span>Regular Price: </span>
                <strike>{product.regularPrice}$</strike>
              </Typography>
              <Box>
                <Typography variant="bodyNormal">
                  <span>Save: {product.save}$</span>
                </Typography>
              </Box>

              <Box>
                <Typography variant="bodyNormal">
                  <span>Condition: {product.condition}</span>
                </Typography>
              </Box>

              <Box>
                <Typography variant="bodyNormal">
                  <span>Brand: {product.brand}</span>
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                pt: 2,
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#1C3E5E",
                  width: "100%",
                  height: "40px",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  "&:hover": {
                    backgroundColor: "#1C3E5E",
                  },
                }}
              >
                <Call />
                +880 123456789
              </Button>
            </Box>
            <AddToCart product={product} />
            <Box
              sx={{
                border: "1px solid #E1E1E1",
                borderRadius: 2,
                p: 2,
                mt: 2,
              }}
            >
              <Image
                src={OffterBanner}
                alt="Hello"
                width={200}
                height={200}
                style={{
                  width: "100%",
                  height: "200px",
                }}
              />
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 2,
                py: 2,
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#f44336",
                  color: "#fff",
                  width: "100%",
                  height: "40px",
                  borderRadius: 2,
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  "&:hover": {
                    backgroundColor: "#f10000",
                  },
                }}
              >
                Report
                <ReportSharp />
              </Button>
            </Box>
          </Box>
        </Box>
        <Box mt={1}>
          <Typography
            variant="h6"
            component={"h6"}
            sx={{
              fontSize: 22,
            }}
            my={2}
          >
            Description
          </Typography>
          <Typography variant="bodyNormal">{product.description}</Typography>
        </Box>

        <Box my={3}>
          <Typography
            variant="h6"
            component={"h6"}
            sx={{
              fontSize: 22,
            }}
            my={2}
          >
            Related Products
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          gap={1}
          flexWrap={"wrap"}
          my={1}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Box>
      </Container>
    </Box>
  );
};

export default ProductDetails;
