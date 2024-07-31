// import React from "react";

// const AddressCard = () => {
//   return (
//     <div>
//       <div className="space-y-3">
//         <p className="font-semibold"> Raam Kappor</p>

//         <p>Mumbai , gokuldham , market , 40001 </p>
//         <div className="space-y-1">
//           <p className="font-semibold">Phone number</p>
//           <p>238232828</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddressCard;

import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const AddressCard = () => {
  return (
    <Box
      sx={{
        border: "1px solid #d0d0d0", // Light gray border
        borderRadius: "10px", // Rounded corners
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Subtle shadow
        padding: "16px", // Padding inside the div
        bgcolor: "#fafafa", // Background color
        // maxWidth: "300px", // Max width for the card
        // margin: "auto", // Center the card
      }}
    >
      <Box className="space-y-3">
        <Typography variant="h6" component="p" className="font-semibold">
          Raam Kappor
        </Typography>
        <Typography variant="body1" component="p">
          Mumbai, Gokuldham, Market, 40001
        </Typography>
        <Box className="space-y-1">
          <Typography
            variant="subtitle1"
            component="p"
            className="font-semibold"
          >
            Phone number
          </Typography>
          <Typography variant="body2" component="p">
            238232828
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AddressCard;
