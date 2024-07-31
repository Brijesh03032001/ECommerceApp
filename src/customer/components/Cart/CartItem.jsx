import { Button, IconButton } from "@mui/material";
import React from "react";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
const CartItem = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src="https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg"
            alt=""
          />
        </div>
        <div className="ml-5 space-y-1 ">
          <p className="font-semibold">Men Slim mid rose jeans</p>
          <p className="opacity-70"> Size : L,White</p>
          <p className="opacity-70 mt-2"> Seller : Briijesh Productions</p>

          <div className="flex space-x-5  items-center text-gray-900 pt-6">
            <p className="font-semibold">
              {/* {product.discountedPrice} */}
              &#x20B9;200
            </p>
            <p className="line-through opacity-50">
              {/* {product.price} */}
              &#x20B9;1000
            </p>
            <p className="text-green-600 font-semibold">
              {/* {product.discountPersent}% Off */}
              50% Off
            </p>
          </div>
        </div>
      </div>
      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">3 </span>
          <IconButton sx={{ color: "RGB(145 85 253)" }}>
            <AddCircleOutlineIcon />
          </IconButton>
        </div>
        <div>
          <Button sx={{ color: "RGB(145 85 253)" }}>Remove </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
