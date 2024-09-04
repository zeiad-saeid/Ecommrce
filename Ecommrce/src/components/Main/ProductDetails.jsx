// @ts-nocheck
/* eslint-disable react/no-unescaped-entities */
import { Box, Button, Stack, Typography } from "@mui/material";
import finalImage from "../../Images/t-shirts-products/6/1.jpg";
import imagesImage from "../../Images/t-shirts-products/6/2.jpg";
import { AddShoppingCartOutlined } from "@mui/icons-material";

const ProductDetails = () => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2.5  , flexDirection: { xs: "column", sm: "row" }}}>
        <Box>
          <img width={360} src="src/Images/t-shirts-products/1/final.png" alt="Product Image" />
        </Box>

        <Box sx={{ py: 2, textAlign: { xs: "center", sm: "left" } }}>
          <Typography variant="h5">WOMEN'S FASHION</Typography>
          <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
            $12.99
          </Typography>
          <Typography variant="body1">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica.
          </Typography>
          <Stack direction={"row"} my={2} sx={{ justifyContent: { xs: "center", sm: "left" } }}>
            {[finalImage, imagesImage].map((item) => (
              <img style={{borderRadius : 3}} height={100} width={90} key={item} src={item} alt="Thumbnail" />
            ))}
          </Stack>
          <Button
          sx={{ mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetails;
