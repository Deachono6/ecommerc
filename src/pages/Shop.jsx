import { Box, Typography, Grid, Container } from "@mui/material";
import products from "../data/products";
import ProductCard from "../components/ProductsCard";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";
export default function Shop() {
  const [category, setCategory] = useState("ALL");
const filteredProducts =
  category === "ALL"
    ? products
    : products.filter((p) => p.category === category);
  return (
    <Box sx={{ py: 8 }}>
      <ToggleButtonGroup
        value={category}
        exclusive
        onChange={(e, value) => value && setCategory(value)}
        sx={{
          mb: 4,
        }}
      >
        {["ALL", "TEE", "PANTS"].map((item) => (
          <ToggleButton
            key={item}
            value={item}
            sx={{
              px: 3,
              borderColor: "#333",
              "&.Mui-selected": {
                backgroundColor: "#fff",
                color: "#000",
              },
            }}
          >
            {item}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>

      <Container maxWidth="xl">
        <Typography
          variant="h4"
          sx={{
            mb: 6,
            fontWeight: 800,
            letterSpacing: "0.2em",
          }}
        >
          DROP 01
        </Typography>
        <Typography color="grey.500" sx={{ mb: 4 }}>
          LIMITED COLLECTION — SUKHOTHAI EDITION
        </Typography>

        <Grid container spacing={4}>
          {filteredProducts?.map((products) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={products.id}>
              <ProductCard products={products} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
