import React from "react";
import { Button, Grid, Typography } from "@mui/material";

const Section = ({ title, items }) => (
  <Grid item xs={12} sm={6} md={3}>
    <Typography className="pb-5" variant="h6">
      {title}
    </Typography>
    {items.map((item, index) => (
      <div key={index}>
        <Button
          style={{ textTransform: "none" }}
          className="pb-5"
          variant="h6"
          gutterBottom
        >
          {item}
        </Button>
      </div>
    ))}
  </Grid>
);

export default Section;
