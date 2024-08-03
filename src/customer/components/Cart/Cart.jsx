import React from "react";
import CartItem from "./CartItem";
import { Box, Button, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/checkout?step=2");
  };
  return (
    <div>
      <div className="lg:grid grid-cols-3 lg:px-16 relative">
        <div className="col-span-2 space-y-2">
          {[1, 1, 1, 1, 1].map((item) => (
            <CartItem />
          ))}
        </div>
        {/* <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <div className="border" >
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <Divider />
            <div className="space-y-3 font-semibol mb-10">
              <div className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4732</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Discount</span>
                <span className="text-green-600">- ₹3512</span>
              </div>
              <div className="flex justify-between pt-3 ">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </div>
              <div className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600 ">₹2422</span>
              </div>
            </div>
            <Button
              variant="contained"
              className="w-full mt-5"
              sx={{
                px: "2.5rem",
                py: "0.7rem",

                mt: "1rem",
                bgcolor: "#9155fd",
                "&:hover": {
                  bgcolor: "#7a4cc7", // Change to the desired hover color
                },
              }}
            >
              Checkout
            </Button>
          </div>
        </div> */}
        <Box className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
          <Box
            sx={{
              border: "1px solid #d0d0d0", // Light gray border
              borderRadius: "10px", // Rounded corners
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
              padding: "16px", // Optional padding inside the div
            }}
          >
            <p className="uppercase font-bold opacity-60 pb-4">Price Details</p>
            <Divider />
            <Box className="space-y-3 font-semibol mb-10">
              <Box className="flex justify-between pt-3 text-black">
                <span>Price</span>
                <span>₹4732</span>
              </Box>
              <Box className="flex justify-between pt-3">
                <span>Discount</span>
                <span className="text-green-600">- ₹3512</span>
              </Box>
              <Box className="flex justify-between pt-3">
                <span>Delivery Charges</span>
                <span className="text-green-600">Free</span>
              </Box>
              <Box className="flex justify-between pt-3 font-bold">
                <span>Total Amount</span>
                <span className="text-green-600">₹2422</span>
              </Box>
            </Box>
            <Button
              onClick={handleCheckout}
              variant="contained"
              className="w-full"
              sx={{
                px: "2.5rem",
                py: "0.7rem",

                bgcolor: "#9155fd",
                "&:hover": {
                  bgcolor: "#7a4cc7", // Change to the desired hover color
                },
              }}
            >
              Checkout
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Cart;
