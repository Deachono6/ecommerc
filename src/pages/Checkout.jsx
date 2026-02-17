import {
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  Divider,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    payment: "promptpay",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <Box p={{ xs: 2, md: 6 }} bgcolor="#111" minHeight="100vh">
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
      <Typography
        variant="h4"
        gutterBottom
        sx={{ color: "#fff", fontWeight: 700 }}
      >
        CHECKOUT
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4, backgroundColor: "#1c1c1c", color: "#fff" }}>
            <Typography variant="h6" gutterBottom>
              Shipping Information
            </Typography>

            <TextField
              fullWidth
              label="Full Name"
              name="name"
              margin="normal"
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{ input: { color: "#fff" } }}
            />

            <TextField
              fullWidth
              label="Phone Number"
              name="phone"
              margin="normal"
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{ input: { color: "#fff" } }}
            />

            <TextField
              fullWidth
              label="Address"
              name="address"
              multiline
              rows={3}
              margin="normal"
              onChange={handleChange}
              InputLabelProps={{ style: { color: "#aaa" } }}
              sx={{ textarea: { color: "#fff" } }}
            />

            <Typography mt={3}>Payment Method</Typography>

            <RadioGroup
              name="payment"
              value={form.payment}
              onChange={handleChange}
            >
              <FormControlLabel
                value="promptpay"
                control={<Radio />}
                label="PromptPay"
              />
              <FormControlLabel
                value="cod"
                control={<Radio />}
                label="Cash on Delivery"
              />
            </RadioGroup>
          </Paper>
        </Grid>

        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 4, backgroundColor: "#1c1c1c", color: "#fff" }}>
            <Typography variant="h6" gutterBottom>
              Order Summary
            </Typography>

            {cartItems.map((item) => (
              <Box key={item.id} mb={2}>
                <Typography>
                  {item.name} x {item.quantity}
                </Typography>
                <Typography variant="body2" color="#aaa">
                  ฿{item.price * item.quantity}
                </Typography>
                <Divider sx={{ my: 1, backgroundColor: "#333" }} />
              </Box>
            ))}

            <Typography variant="h6" mt={2}>
              Total: ฿{totalPrice}
            </Typography>

            <Button
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                backgroundColor: "#fff",
                color: "#000",
                fontWeight: 700,
                "&:hover": { backgroundColor: "#ddd" },
              }}
              onClick={() => alert("ORDER CONFIRMED 🔥")}
            >
              PLACE ORDER
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Checkout;
