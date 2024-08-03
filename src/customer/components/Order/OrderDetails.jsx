import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
const OrderDetails = () => {
  return (
    <div className="px:5 lg:px-20">
      <div>
        <h1 className="font-bold text-xl py-7"> Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="py-20">
        <OrderTracker activeStep={3} />
      </div>

      <Grid container className="space-y-5">
        {[1, 1, 1, 1, 1, 1].map((item) => (
          <Grid
            item
            container
            className="shadow-xl p-5 border rounded-md"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              <div className="flex items-center space-x-2">
                <img
                  className="w-[5rem] h-[5rem] object-cover object-top "
                  src="https://rukminim1.flixcart.com/image/612/612/l5h2xe80/kurta/x/6/n/xl-kast-tile-green-majestic-man-original-imagg4z33hu4kzpv.jpeg?q=70"
                  alt=""
                />
                <div className="space-y-2">
                  <p className="font-semibold">Men Slim Mid rise black Jeans</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Colour : Black</span>
                    <span> Size : M </span>
                  </p>

                  <p>&#x20B9;200</p>
                </div>
              </div>
            </Grid>

            <Grid item xs={3}>
              <Box sx={{ color: deepPurple[500], paddingX: 2 }}>
                <StarBorderOutlinedIcon
                  className="px-2"
                  sx={{ fontSize: "2rem" }}
                />
                <span>Rate & Review Product</span>
              </Box>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default OrderDetails;
