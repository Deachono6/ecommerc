import { Box, Typography, Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: {
              xs: "2.5rem",
              sm: "4rem",
              md: "6rem",
            },
            fontWeight: 800,
            letterSpacing: "0.2em",
          }}
        >
          NOCTRL
        </Typography>

        <Typography
          sx={{
            mt: 3,
            color: "grey.500",
            letterSpacing: "0.4em",
            fontSize: {
              xs: "0.8rem",
              md: "1rem",
            },
          }}
        >
          BANGKOK BASED
        </Typography>

        <Button
          variant="outlined"
          fullWidth
          onClick={() => navigate("/shop")}
          sx={{
            mt: 6,
            py: 2,
            maxWidth: 300,
            borderColor: "#fff",
            "&:hover": {
              backgroundColor: "#fff",
              color: "#000",
            },
          }}
        >
          SHOP DROP 01
        </Button>
      </Container>
    </Box>
  );
}
