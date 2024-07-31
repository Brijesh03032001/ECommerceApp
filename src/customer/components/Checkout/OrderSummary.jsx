import React from "react";
import AddressCard from "./../AddressCard/AddressCard";
import { Box, Button, Divider } from "@mui/material";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard />
      </div>
      <div>
        <div className="lg:grid grid-cols-3  relative">
          <div className="col-span-2 mt-5 space-y-2">
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
          <Box className="pl-2 sticky top-0 h-[100vh] mt-5 lg:mt-5">
            <Box
              sx={{
                border: "1px solid #d0d0d0", // Light gray border
                borderRadius: "10px", // Rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
                padding: "16px", // Optional padding inside the div
              }}
            >
              <p className="uppercase font-bold opacity-60 pb-4">
                Price Details
              </p>
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
    </div>
  );
};

export default OrderSummary;
