import { useParams } from "react-router-dom";
import products from "../data/products";
import {
  Box,
  Typography,
  Grid,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Container,
} from "@mui/material";
import { useState } from "react";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  if (!product) return <div>Product not found</div>;

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        onClick={() => navigate(-1)}
        sx={{
          mb: 4,
          cursor: "pointer",
          letterSpacing: "0.2em",
          fontSize: "0.9rem",
          color: "grey.400",
          "&:hover": {
            color: "#fff",
          },
        }}
      >
        ← BACK TO SHOP
      </Typography>
      <Grid container spacing={6}>
   
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src={product.image}
            alt={product.name}
            sx={{
              width: "100%",
              height: { xs: 400, md: 600 },
              objectFit: "cover",
            }}
          />
        </Grid>

       
        <Grid item xs={12} md={6}>
          <Typography
            variant="h4"
            sx={{
              fontWeight: 800,
              letterSpacing: "0.1em",
            }}
          >
            {product.name}
          </Typography>

          <Typography sx={{ mt: 2 }} color="grey.400">
            ฿ {product.price}
          </Typography>

          <Box sx={{ mt: 5 }}>
            <Typography sx={{ mb: 2, letterSpacing: "0.2em" }}>
              SELECT SIZE
            </Typography>

            <ToggleButtonGroup
              value={selectedSize}
              exclusive
              onChange={(e, value) => setSelectedSize(value)}
            >
              {product.sizes.map((item) => (
                <ToggleButton
                  key={item.size}
                  value={item.size}
                  disabled={item.stock === 0}
                  sx={{
                    px: 3,
                    py: 1,
                    mr: 1,
                  }}
                >
                  {item.size}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </Box>

      
          <Button
            variant="contained"
            fullWidth
            disabled={!selectedSize}
            onClick={() => addToCart(product, selectedSize)}
            sx={{
              mt: 6,
              py: 2,
              backgroundColor: "#fff",
              color: "#000",
              fontWeight: 700,
            }}
          >
            ADD TO CART
          </Button>

          {selectedSize && (
            <Typography sx={{ mt: 2 }} color="grey.500">
              {product.sizes.find((s) => s.size === selectedSize)?.stock} pieces
              left
            </Typography>
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
