import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCart } from "../context/CartContext";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
export default function CartDrawer({ open, onClose }) {
  const { cartItems, removeFromCart, totalPrice, decreaseQuantity, addToCart } =
    useCart();
  const navigate = useNavigate();
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 350, p: 3 }}>
        <Box display="flex" justifyContent="space-between" mb={2}>
          <Typography variant="h6">CART</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider sx={{ mb: 2 }} />

        {cartItems.length === 0 && (
          <Typography color="grey.500">Cart is empty</Typography>
        )}

        {cartItems.map((item) => (
          <Box key={item.id + item.size} mb={2}>
            <Typography>{item.name}</Typography>
            <Typography color="grey.500">
              Size: {item.size} × {item.quantity}
            </Typography>
            <Typography>฿ {item.price * item.quantity}</Typography>
            <Box display="flex" alignItems="center" gap={1}>
              <Button
                variant="outlined"
                size="small"
                onClick={() => decreaseQuantity(item.id)}
              >
                <RemoveIcon />
              </Button>

              <Typography>{item.quantity}</Typography>

              <Button
                variant="outlined"
                size="small"
                onClick={() => addToCart(item, item.size)}
              >
                <AddIcon />
              </Button>
            </Box>
            <Button
              size="small"
              color="error"
              onClick={() => removeFromCart(item.id, item.size)}
            >
              Remove
            </Button>

            <Divider sx={{ mt: 1 }} />
          </Box>
        ))}

        <Box mt={4}>
          <Typography variant="h6">Total: ฿ {totalPrice}</Typography>

          <Button
            variant="contained"
            fullWidth
            sx={{
              mt: 2,
              backgroundColor: "#fff",
              color: "#000",
            }}
            onClick={() => navigate("/checkout")}
          >
            CHECKOUT
          </Button>
        </Box>
      </Box>
    </Drawer>
  );
}
