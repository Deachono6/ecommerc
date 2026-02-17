import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ products }) {
  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate(`/product/${products.id}`)}
      sx={{
        backgroundColor: "#1a1a1a",
        cursor: "pointer",
        transition: "0.3s",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        image={products.image}
        alt={products.name}
        sx={{
          height: 400,
          objectFit: "cover",
        }}
      />

      <CardContent>
        <Typography
          sx={{
            fontWeight: 700,
            letterSpacing: "0.1em",
          }}
        >
          {products.name}
        </Typography>

        <Box mt={1}>
          <Typography color="grey.400">
            ฿ {products.price}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
